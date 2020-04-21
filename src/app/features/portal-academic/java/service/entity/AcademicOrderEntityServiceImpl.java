/**
 * 
 */
package com.alstrabank.writing.academic.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstrabank.writing.academic.data.AcademicOrderData;
import com.alstrabank.writing.academic.model.AcademicOrder;

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
public class AcademicOrderEntityServiceImpl extends AbstractBusinessService implements AcademicOrderEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public AcademicOrderEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public AcademicOrderEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstrabank.writing.academic.service.AcademicOrderFinderService#findById(java.lang.
	 * Long)
	 */
	public AcademicOrder findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, AcademicOrder.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstrabank.writing.academic.service.AcademicOrderFinderService#findByCode(java.lang
	 * .String)
	 */
	public AcademicOrder findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, AcademicOrder.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstrabank.writing.academic.service.AcademicOrderFinderService#findAcademicOrderByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<AcademicOrder> findByCriteria(EntityDataCriteria<AcademicOrder> criteria) throws BusinessDataNotFoundException {
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
	public AcademicOrder create(AcademicOrderData data) throws BusinessServiceException {
		try {
			AcademicOrder academicOrder = new AcademicOrder();
			return dataService.create(academicOrder);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param AcademicOrder
     * @return
     * @throws BusinessServiceException
     */
    public AcademicOrder update(String code, AcademicOrderData academicOrderData) throws BusinessServiceException {
		try {
			AcademicOrder academicOrder = dataService.findByCode(code, AcademicOrder.class);
			return dataService.update(code, academicOrder);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("AcademicOrder not found");
		}
	}


    /**
     * @param code
     * @param AcademicOrder
     * @return
     * @throws BusinessServiceException
     */
    public AcademicOrder update(AcademicOrderData academicOrder) throws BusinessServiceException {
		try {
			return dataService.update(academicOrder.getCode(), academicOrder);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("AcademicOrder not found");
		}
	}

    /**
     * Deletes a AcademicOrder.
     * @param code
	 * @return The code of the deleted AcademicOrder
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, AcademicOrder.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("AcademicOrder not found");
		}
	}
}