package com.alstradocs.empicus.project.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.project.data.ProjectData;
import com.alstradocs.empicus.project.model.Project;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface ProjectEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public Project findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Project findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<Project> findByCriteria(EntityDataCriteria<Project> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Project create(ProjectData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Project
     * @return
     * @throws BusinessServiceException
     */
    public Project update(String code, ProjectData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Project
     * @return
     * @throws BusinessServiceException
     */
    public Project update(ProjectData project) throws BusinessServiceException;

    /**
     * Deletes a Project.
     * @param code
	 * @return The code of the deleted Project
     */
    public String delete(String code) throws BusinessServiceException;


}