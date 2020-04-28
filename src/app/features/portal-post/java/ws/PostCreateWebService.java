/**
 * 
 */
package com.alstradocs.empicus.post.ws;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.ejb.Stateless;
import javax.inject.Inject;


import com.alstradocs.empicus.post.data.PostData;
import com.alstradocs.empicus.post.service.PostService;

import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "postCreate")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_POST })
public class PostCreateWebService extends AbstractWebService implements WebService {
	
	@Inject
	PostService postService;

	private final List<String> fields = Stream.of(
		WebConstants.CODE_FIELD
	).collect(Collectors.toList()); 
	

	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		String code = (String) requestData.getDataItem(WebConstants.CODE_FIELD);

		PostData data = new PostData();
		data.setCode(code);
		postService.create(data);
		return new ResponsePayloadData();
	}

	
	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
		for(String field : fields) {
			if (!requestData.getData().containsKey(field))
				throw new BusinessDataNotFoundException("Insufficient information provided");
		}
	}

}