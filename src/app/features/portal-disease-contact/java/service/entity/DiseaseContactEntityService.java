package com.alstradocs.empicus.diseasecontact.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.diseasecontact.data.DiseaseContactData;
import com.alstradocs.empicus.diseasecontact.model.DiseaseContact;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface DiseaseContactEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseContact findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseContact findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<DiseaseContact> findByCriteria(EntityDataCriteria<DiseaseContact> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseContact create(DiseaseContactData data) throws BusinessServiceException;

    /**
     * @param code
     * @param DiseaseContact
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseContact update(String code, DiseaseContactData data) throws BusinessServiceException;

    /**
     * @param code
     * @param DiseaseContact
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseContact update(DiseaseContactData diseaseContact) throws BusinessServiceException;

    /**
     * Deletes a DiseaseContact.
     * @param code
	 * @return The code of the deleted DiseaseContact
     */
    public String delete(String code) throws BusinessServiceException;


}