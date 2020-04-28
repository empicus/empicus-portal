/**
 * 
 */
package com.alstradocs.empicus.pathogen.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.pathogen.data.PathogenData;
import com.alstradocs.empicus.pathogen.model.Pathogen;
import com.alstradocs.empicus.pathogen.service.entity.PathogenEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class PathogenServiceImpl extends AbstractBusinessService implements PathogenService {
	
	@Inject
	PathogenEntityService pathogenEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Pathogen findByCode(String code) throws BusinessServiceException {
		return pathogenEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<Pathogen> findByCriteria(EntityDataCriteria<Pathogen> criteria) throws BusinessServiceException {
		return pathogenEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Pathogen create(PathogenData data) throws BusinessServiceException {
		return pathogenEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Pathogen update(String code, PathogenData data) throws BusinessServiceException {
		return pathogenEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		pathogenEntityService.delete(code);
	}


}
