/**
 * 
 */
package com.alstradocs.empicus.pathogen.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.pathogen.data.PathogenData;
import com.alstradocs.empicus.pathogen.model.Pathogen;

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
public class PathogenEntityServiceImpl extends AbstractBusinessService implements PathogenEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public PathogenEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public PathogenEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.pathogen.service.PathogenFinderService#findById(java.lang.
	 * Long)
	 */
	public Pathogen findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, Pathogen.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.pathogen.service.PathogenFinderService#findByCode(java.lang
	 * .String)
	 */
	public Pathogen findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, Pathogen.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.pathogen.service.PathogenFinderService#findPathogenByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<Pathogen> findByCriteria(EntityDataCriteria<Pathogen> criteria) throws BusinessDataNotFoundException {
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
	public Pathogen create(PathogenData data) throws BusinessServiceException {
		try {
			Pathogen pathogen = new Pathogen();
			return dataService.create(pathogen);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param Pathogen
     * @return
     * @throws BusinessServiceException
     */
    public Pathogen update(String code, PathogenData pathogenData) throws BusinessServiceException {
		try {
			Pathogen pathogen = dataService.findByCode(code, Pathogen.class);
			return dataService.update(code, pathogen);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Pathogen not found");
		}
	}


    /**
     * @param code
     * @param Pathogen
     * @return
     * @throws BusinessServiceException
     */
    public Pathogen update(PathogenData pathogenData) throws BusinessServiceException {
		try {
			Pathogen pathogen = new Pathogen();
			return dataService.update(pathogen.getCode(), pathogen);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Pathogen not found");
		}
	}

    /**
     * Deletes a Pathogen.
     * @param code
	 * @return The code of the deleted Pathogen
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, Pathogen.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Pathogen not found");
		}
	}
}