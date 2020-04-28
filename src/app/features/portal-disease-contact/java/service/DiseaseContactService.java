/**
 * 
 */
package com.alstradocs.empicus.diseasecontact.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.diseasecontact.data.DiseaseContactData;
import com.alstradocs.empicus.diseasecontact.model.DiseaseContact;

/**
 * @author edward
 *
 */
public interface DiseaseContactService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseContact findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<DiseaseContact> findByCriteria(EntityDataCriteria<DiseaseContact> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseContact create(DiseaseContactData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseContact update(String code, DiseaseContactData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
