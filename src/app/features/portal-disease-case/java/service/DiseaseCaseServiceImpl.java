/**
 * 
 */
package com.alstradocs.empicus.diseasecase.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.diseasecase.data.DiseaseCaseData;
import com.alstradocs.empicus.diseasecase.model.DiseaseCase;
import com.alstradocs.empicus.diseasecase.service.entity.DiseaseCaseEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class DiseaseCaseServiceImpl extends AbstractBusinessService implements DiseaseCaseService {
	
	@Inject
	DiseaseCaseEntityService diseaseCaseEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseCase findByCode(String code) throws BusinessServiceException {
		return diseaseCaseEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<DiseaseCase> findByCriteria(EntityDataCriteria<DiseaseCase> criteria) throws BusinessServiceException {
		return diseaseCaseEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseCase create(DiseaseCaseData data) throws BusinessServiceException {
		return diseaseCaseEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseCase update(String code, DiseaseCaseData data) throws BusinessServiceException {
		return diseaseCaseEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		diseaseCaseEntityService.delete(code);
	}


}
