/**
 * 
 */
package com.alstradocs.empicus.pathogen.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.pathogen.data.PathogenData;
import com.alstradocs.empicus.pathogen.model.Pathogen;

/**
 * @author edward
 *
 */
public interface PathogenService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Pathogen findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<Pathogen> findByCriteria(EntityDataCriteria<Pathogen> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Pathogen create(PathogenData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Pathogen update(String code, PathogenData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
