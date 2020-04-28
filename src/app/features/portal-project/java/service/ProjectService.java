/**
 * 
 */
package com.alstradocs.empicus.project.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.project.data.ProjectData;
import com.alstradocs.empicus.project.model.Project;

/**
 * @author edward
 *
 */
public interface ProjectService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Project findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<Project> findByCriteria(EntityDataCriteria<Project> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Project create(ProjectData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Project update(String code, ProjectData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
