package com.alstradocs.empicus.pathogen.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.pathogen.data.PathogenData;
import com.alstradocs.empicus.pathogen.model.Pathogen;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface PathogenEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public Pathogen findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Pathogen findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<Pathogen> findByCriteria(EntityDataCriteria<Pathogen> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Pathogen create(PathogenData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Pathogen
     * @return
     * @throws BusinessServiceException
     */
    public Pathogen update(String code, PathogenData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Pathogen
     * @return
     * @throws BusinessServiceException
     */
    public Pathogen update(PathogenData pathogen) throws BusinessServiceException;

    /**
     * Deletes a Pathogen.
     * @param code
	 * @return The code of the deleted Pathogen
     */
    public String delete(String code) throws BusinessServiceException;


}