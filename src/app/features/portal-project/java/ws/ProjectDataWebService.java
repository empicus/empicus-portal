/**
 * 
 */
package com.alstradocs.empicus.project.ws;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.project.model.Project;
import com.alstradocs.empicus.project.service.ProjectService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.data.WebRequestData;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "projectData")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_GET })
public class ProjectDataWebService extends AbstractWebService implements WebService {
	
	@Inject
	ProjectService projectService;

	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		WebRequestData webRequestData = (WebRequestData) requestData;
		String projectCode = webRequestData.getArtifactCode();
		Project project = projectService.findByCode(projectCode);
		return new ResponsePayloadData(project.toEntityData());
	}

	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
		
		WebRequestData webRequestData = (WebRequestData) requestData;
		if (Objects.isNull(webRequestData.getArtifactCode()))
			throw new BusinessDataNotFoundException("Insufficient information provided");
	}

}
