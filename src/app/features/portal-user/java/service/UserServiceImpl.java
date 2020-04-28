/**
 * 
 */
package com.alstradocs.empicus.user.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.user.data.UserData;
import com.alstradocs.empicus.user.model.User;
import com.alstradocs.empicus.user.service.entity.UserEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class UserServiceImpl extends AbstractBusinessService implements UserService {
	
	@Inject
	UserEntityService userEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public User findByCode(String code) throws BusinessServiceException {
		return userEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<User> findByCriteria(EntityDataCriteria<User> criteria) throws BusinessServiceException {
		return userEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public User create(UserData data) throws BusinessServiceException {
		return userEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public User update(String code, UserData data) throws BusinessServiceException {
		return userEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		userEntityService.delete(code);
	}


}
