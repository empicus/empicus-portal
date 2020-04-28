/**
 * 
 */
package com.alstradocs.empicus.disease.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.disease.data.DiseaseData;
import com.alstradocs.empicus.disease.model.Disease;

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
public class DiseaseEntityServiceImpl extends AbstractBusinessService implements DiseaseEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public DiseaseEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public DiseaseEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.disease.service.DiseaseFinderService#findById(java.lang.
	 * Long)
	 */
	public Disease findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, Disease.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.disease.service.DiseaseFinderService#findByCode(java.lang
	 * .String)
	 */
	public Disease findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, Disease.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.disease.service.DiseaseFinderService#findDiseaseByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<Disease> findByCriteria(EntityDataCriteria<Disease> criteria) throws BusinessDataNotFoundException {
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
	public Disease create(DiseaseData data) throws BusinessServiceException {
		try {
			Disease disease = new Disease();
			return dataService.create(disease);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param Disease
     * @return
     * @throws BusinessServiceException
     */
    public Disease update(String code, DiseaseData diseaseData) throws BusinessServiceException {
		try {
			Disease disease = dataService.findByCode(code, Disease.class);
			return dataService.update(code, disease);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Disease not found");
		}
	}


    /**
     * @param code
     * @param Disease
     * @return
     * @throws BusinessServiceException
     */
    public Disease update(DiseaseData diseaseData) throws BusinessServiceException {
		try {
			Disease disease = new Disease();
			return dataService.update(disease.getCode(), disease);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Disease not found");
		}
	}

    /**
     * Deletes a Disease.
     * @param code
	 * @return The code of the deleted Disease
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, Disease.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Disease not found");
		}
	}
}