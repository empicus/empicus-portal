/**
 * 
 */
package com.alstradocs.empicus.disease.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.disease.data.DiseaseData;
import com.alstradocs.empicus.disease.model.Disease;
import com.alstradocs.empicus.disease.service.entity.DiseaseEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class DiseaseServiceImpl extends AbstractBusinessService implements DiseaseService {
	
	@Inject
	DiseaseEntityService diseaseEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Disease findByCode(String code) throws BusinessServiceException {
		return diseaseEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<Disease> findByCriteria(EntityDataCriteria<Disease> criteria) throws BusinessServiceException {
		return diseaseEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Disease create(DiseaseData data) throws BusinessServiceException {
		return diseaseEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Disease update(String code, DiseaseData data) throws BusinessServiceException {
		return diseaseEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		diseaseEntityService.delete(code);
	}


}
