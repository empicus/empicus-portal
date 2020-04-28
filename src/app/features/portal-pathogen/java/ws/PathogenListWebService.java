/**
 * 
 */
package com.alstradocs.empicus.pathogen.ws;

import java.util.List;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.pathogen.model.Pathogen;
import com.alstradocs.empicus.pathogen.service.PathogenService;
import com.cloderia.enterprise.model.ArtifactData;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.util.ListWebServiceUtil;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "pathogenList")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_GET })
public class PathogenListWebService extends AbstractWebService implements WebService {
	
	@Inject
	PathogenService pathogenService;
	
	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		EntityDataCriteria<Pathogen> criteria = new EntityDataCriteria<Pathogen>(Pathogen.ARTIFACT_NAME, Pathogen.class);
		List<ArtifactData> items = pathogenService.findByCriteria(criteria)
			.stream()
			.map((item) -> item.toEntityData())
			.collect(Collectors.toList());
		return new ResponsePayloadData(items);
	}

	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
		ListWebServiceUtil.validateRequest(requestData);
	}
}
