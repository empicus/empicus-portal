/**
 * 
 */
package com.alstrabank.writing.academic.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstrabank.writing.academic.data.AcademicOrderData;
import com.alstrabank.writing.academic.model.AcademicOrder;

/**
 * @author edward
 *
 */
public interface AcademicOrderService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public AcademicOrder findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<AcademicOrder> findByCriteria(EntityDataCriteria<AcademicOrder> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public AcademicOrder create(AcademicOrderData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public AcademicOrder update(String code, AcademicOrderData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
