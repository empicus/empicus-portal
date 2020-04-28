/**
 * 
 */
package com.alstradocs.empicus.diseasecase.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.diseasecase.data.DiseaseCaseData;
import com.alstradocs.empicus.diseasecase.model.DiseaseCase;

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
public class DiseaseCaseEntityServiceImpl extends AbstractBusinessService implements DiseaseCaseEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public DiseaseCaseEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public DiseaseCaseEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.diseasecase.service.DiseaseCaseFinderService#findById(java.lang.
	 * Long)
	 */
	public DiseaseCase findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, DiseaseCase.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.diseasecase.service.DiseaseCaseFinderService#findByCode(java.lang
	 * .String)
	 */
	public DiseaseCase findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, DiseaseCase.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.diseasecase.service.DiseaseCaseFinderService#findDiseaseCaseByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<DiseaseCase> findByCriteria(EntityDataCriteria<DiseaseCase> criteria) throws BusinessDataNotFoundException {
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
	public DiseaseCase create(DiseaseCaseData data) throws BusinessServiceException {
		try {
			DiseaseCase diseaseCase = new DiseaseCase();
			return dataService.create(diseaseCase);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param DiseaseCase
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseCase update(String code, DiseaseCaseData diseaseCaseData) throws BusinessServiceException {
		try {
			DiseaseCase diseaseCase = dataService.findByCode(code, DiseaseCase.class);
			return dataService.update(code, diseaseCase);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("DiseaseCase not found");
		}
	}


    /**
     * @param code
     * @param DiseaseCase
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseCase update(DiseaseCaseData diseaseCaseData) throws BusinessServiceException {
		try {
			DiseaseCase diseaseCase = new DiseaseCase();
			return dataService.update(diseaseCase.getCode(), diseaseCase);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("DiseaseCase not found");
		}
	}

    /**
     * Deletes a DiseaseCase.
     * @param code
	 * @return The code of the deleted DiseaseCase
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, DiseaseCase.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("DiseaseCase not found");
		}
	}
}