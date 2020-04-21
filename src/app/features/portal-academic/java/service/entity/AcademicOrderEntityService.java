package com.alstrabank.writing.academic.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstrabank.writing.academic.data.AcademicOrderData;
import com.alstrabank.writing.academic.model.AcademicOrder;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface AcademicOrderEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public AcademicOrder findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public AcademicOrder findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<AcademicOrder> findByCriteria(EntityDataCriteria<AcademicOrder> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public AcademicOrder create(AcademicOrderData data) throws BusinessServiceException;

    /**
     * @param code
     * @param AcademicOrder
     * @return
     * @throws BusinessServiceException
     */
    public AcademicOrder update(String code, AcademicOrderData data) throws BusinessServiceException;

    /**
     * @param code
     * @param AcademicOrder
     * @return
     * @throws BusinessServiceException
     */
    public AcademicOrder update(AcademicOrderData academicOrder) throws BusinessServiceException;

    /**
     * Deletes a AcademicOrder.
     * @param code
	 * @return The code of the deleted AcademicOrder
     */
    public String delete(String code) throws BusinessServiceException;


}