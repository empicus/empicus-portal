/**
 * 
 */
package com.alstradocs.empicus.pathogen.ws;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.ejb.Stateless;
import javax.inject.Inject;


import com.alstradocs.empicus.pathogen.data.PathogenData;
import com.alstradocs.empicus.pathogen.service.PathogenService;

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
@WebServiceProvider(name = "pathogenCreate")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_POST })
public class PathogenCreateWebService extends AbstractWebService implements WebService {
	
	@Inject
	PathogenService pathogenService;

	private final List<String> fields = Stream.of(
		WebConstants.CODE_FIELD
	).collect(Collectors.toList()); 
	

	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		String code = (String) requestData.getDataItem(WebConstants.CODE_FIELD);

		PathogenData data = new PathogenData();
		data.setCode(code);
		pathogenService.create(data);
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