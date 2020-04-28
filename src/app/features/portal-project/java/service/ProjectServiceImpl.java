/**
 * 
 */
package com.alstradocs.empicus.project.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.project.data.ProjectData;
import com.alstradocs.empicus.project.model.Project;
import com.alstradocs.empicus.project.service.entity.ProjectEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class ProjectServiceImpl extends AbstractBusinessService implements ProjectService {
	
	@Inject
	ProjectEntityService projectEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Project findByCode(String code) throws BusinessServiceException {
		return projectEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<Project> findByCriteria(EntityDataCriteria<Project> criteria) throws BusinessServiceException {
		return projectEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Project create(ProjectData data) throws BusinessServiceException {
		return projectEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Project update(String code, ProjectData data) throws BusinessServiceException {
		return projectEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		projectEntityService.delete(code);
	}


}
