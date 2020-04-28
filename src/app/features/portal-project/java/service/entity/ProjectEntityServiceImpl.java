/**
 * 
 */
package com.alstradocs.empicus.project.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.project.data.ProjectData;
import com.alstradocs.empicus.project.model.Project;

import com.cloderia.enterprise.core.util.StringUtil;
import com.cloderia.enterprise.data.annotations.JPADataService;
import com.cloderia.enterprise.data.service.DataService;
import com.cloderia.enterprise.data.exceptions.DataNotFoundException;
import com.cloderia.enterprise.data.exceptions.DuplicateDataException;
import com.cloderia.enterprise.data.exceptions.DataServiceException;
import com.cloderia.enterprise.data.service.JPQLQueryBuilderService;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.model.data.BaseData;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.service.exceptions.DuplicateBusinessDataException;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class ProjectEntityServiceImpl extends AbstractBusinessService implements ProjectEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public ProjectEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public ProjectEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.project.service.ProjectFinderService#findById(java.lang.
	 * Long)
	 */
	public Project findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, Project.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.project.service.ProjectFinderService#findByCode(java.lang
	 * .String)
	 */
	public Project findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, Project.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.project.service.ProjectFinderService#findProjectByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<Project> findByCriteria(EntityDataCriteria<Project> criteria) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCriteria(criteria);
		} catch (DataServiceException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Project create(ProjectData data) throws BusinessServiceException {
		try {
			Project project = new Project();
			return dataService.create(project);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param Project
     * @return
     * @throws BusinessServiceException
     */
    public Project update(String code, ProjectData projectData) throws BusinessServiceException {
		try {
			Project project = dataService.findByCode(code, Project.class);
			return dataService.update(code, project);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Project not found");
		}
	}


    /**
     * @param code
     * @param Project
     * @return
     * @throws BusinessServiceException
     */
    public Project update(ProjectData projectData) throws BusinessServiceException {
		try {
			Project project = new Project();
			return dataService.update(project.getCode(), project);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Project not found");
		}
	}

    /**
     * Deletes a Project.
     * @param code
	 * @return The code of the deleted Project
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, Project.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Project not found");
		}
	}
}