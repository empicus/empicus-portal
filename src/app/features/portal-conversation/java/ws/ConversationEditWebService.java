/**
 * 
 */
package com.alstradocs.empicus.conversation.ws;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.ejb.Stateless;
import javax.inject.Inject;


import com.alstradocs.empicus.conversation.data.ConversationData;
import com.alstradocs.empicus.conversation.service.ConversationService;

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
@WebServiceProvider(name = "conversationEdit")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_POST })
public class ConversationEditWebService extends AbstractWebService implements WebService {
	
	@Inject
	ConversationService conversationService;

	private final List<String> fields = Stream.of(
		WebConstants.CODE_FIELD
	).collect(Collectors.toList()); 

	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		String code = (String) requestData.getDataItem(WebConstants.CODE_FIELD);

		ConversationData data = new ConversationData();
		data.setCode(code);
		conversationService.update(code, data);
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