/**
 * 
 */
package com.alstradocs.empicus.diseasecontact.ws;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.ArtifactData;
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
@WebServiceProvider(name = "diseaseContactEditFormData")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_POST })
public class DiseaseContactEditFormResolverWebService extends AbstractWebService implements WebService {
	
	@Inject
	DiseaseContactService diseaseContactService;

	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		return new ResponsePayloadData(new ArtifactData());
	}

	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
	}

}