/**
 * 
 */
package com.alstradocs.empicus.disease.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.disease.data.DiseaseData;
import com.alstradocs.empicus.disease.model.Disease;

/**
 * @author edward
 *
 */
public interface DiseaseService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Disease findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<Disease> findByCriteria(EntityDataCriteria<Disease> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Disease create(DiseaseData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Disease update(String code, DiseaseData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
