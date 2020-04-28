/**
 * 
 */
package com.alstradocs.empicus.diseasecase.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.diseasecase.data.DiseaseCaseData;
import com.alstradocs.empicus.diseasecase.model.DiseaseCase;

/**
 * @author edward
 *
 */
public interface DiseaseCaseService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseCase findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<DiseaseCase> findByCriteria(EntityDataCriteria<DiseaseCase> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseCase create(DiseaseCaseData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseCase update(String code, DiseaseCaseData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
