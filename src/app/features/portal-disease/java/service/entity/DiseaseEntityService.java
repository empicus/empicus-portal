package com.alstradocs.empicus.disease.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.disease.data.DiseaseData;
import com.alstradocs.empicus.disease.model.Disease;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface DiseaseEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public Disease findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Disease findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<Disease> findByCriteria(EntityDataCriteria<Disease> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Disease create(DiseaseData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Disease
     * @return
     * @throws BusinessServiceException
     */
    public Disease update(String code, DiseaseData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Disease
     * @return
     * @throws BusinessServiceException
     */
    public Disease update(DiseaseData disease) throws BusinessServiceException;

    /**
     * Deletes a Disease.
     * @param code
	 * @return The code of the deleted Disease
     */
    public String delete(String code) throws BusinessServiceException;


}