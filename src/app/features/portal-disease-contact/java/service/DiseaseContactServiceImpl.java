/**
 * 
 */
package com.alstradocs.empicus.diseasecontact.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.diseasecontact.data.DiseaseContactData;
import com.alstradocs.empicus.diseasecontact.model.DiseaseContact;
import com.alstradocs.empicus.diseasecontact.service.entity.DiseaseContactEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class DiseaseContactServiceImpl extends AbstractBusinessService implements DiseaseContactService {
	
	@Inject
	DiseaseContactEntityService diseaseContactEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseContact findByCode(String code) throws BusinessServiceException {
		return diseaseContactEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<DiseaseContact> findByCriteria(EntityDataCriteria<DiseaseContact> criteria) throws BusinessServiceException {
		return diseaseContactEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseContact create(DiseaseContactData data) throws BusinessServiceException {
		return diseaseContactEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public DiseaseContact update(String code, DiseaseContactData data) throws BusinessServiceException {
		return diseaseContactEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		diseaseContactEntityService.delete(code);
	}


}
