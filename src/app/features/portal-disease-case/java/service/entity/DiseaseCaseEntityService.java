package com.alstradocs.empicus.diseasecase.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.diseasecase.data.DiseaseCaseData;
import com.alstradocs.empicus.diseasecase.model.DiseaseCase;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface DiseaseCaseEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseCase findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseCase findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<DiseaseCase> findByCriteria(EntityDataCriteria<DiseaseCase> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public DiseaseCase create(DiseaseCaseData data) throws BusinessServiceException;

    /**
     * @param code
     * @param DiseaseCase
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseCase update(String code, DiseaseCaseData data) throws BusinessServiceException;

    /**
     * @param code
     * @param DiseaseCase
     * @return
     * @throws BusinessServiceException
     */
    public DiseaseCase update(DiseaseCaseData diseaseCase) throws BusinessServiceException;

    /**
     * Deletes a DiseaseCase.
     * @param code
	 * @return The code of the deleted DiseaseCase
     */
    public String delete(String code) throws BusinessServiceException;


}