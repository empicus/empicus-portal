/**
 * 
 */
package com.alstradocs.empicus.disease.ws;

import java.util.List;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.disease.model.Disease;
import com.alstradocs.empicus.disease.service.DiseaseService;
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
@WebServiceProvider(name = "diseaseList")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_GET })
public class DiseaseListWebService extends AbstractWebService implements WebService {
	
	@Inject
	DiseaseService diseaseService;
	
	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		EntityDataCriteria<Disease> criteria = new EntityDataCriteria<Disease>(Disease.ARTIFACT_NAME, Disease.class);
		List<ArtifactData> items = diseaseService.findByCriteria(criteria)
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
