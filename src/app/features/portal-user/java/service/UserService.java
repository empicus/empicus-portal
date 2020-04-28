/**
 * 
 */
package com.alstradocs.empicus.user.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.user.data.UserData;
import com.alstradocs.empicus.user.model.User;

/**
 * @author edward
 *
 */
public interface UserService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public User findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<User> findByCriteria(EntityDataCriteria<User> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public User create(UserData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public User update(String code, UserData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
