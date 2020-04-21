/**
 * 
 */
package com.alstrabank.writing.academic.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstrabank.writing.academic.data.AcademicOrderData;
import com.alstrabank.writing.academic.model.AcademicOrder;
import com.alstrabank.writing.academic.service.entity.AcademicOrderEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class AcademicOrderServiceImpl extends AbstractBusinessService implements AcademicOrderService {
	
	@Inject
	AcademicOrderEntityService academicOrderEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public AcademicOrder findByCode(String code) throws BusinessServiceException {
		return academicOrderEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<AcademicOrder> findByCriteria(EntityDataCriteria<AcademicOrder> criteria) throws BusinessServiceException {
		return academicOrderEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public AcademicOrder create(AcademicOrderData data) throws BusinessServiceException {
		return academicOrderEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public AcademicOrder update(String code, AcademicOrderData data) throws BusinessServiceException {
		return academicOrderEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		academicOrderEntityService.delete(code);
	}


}
