package com.alstradocs.empicus.user.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.user.data.UserData;
import com.alstradocs.empicus.user.model.User;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface UserEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public User findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public User findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<User> findByCriteria(EntityDataCriteria<User> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public User create(UserData data) throws BusinessServiceException;

    /**
     * @param code
     * @param User
     * @return
     * @throws BusinessServiceException
     */
    public User update(String code, UserData data) throws BusinessServiceException;

    /**
     * @param code
     * @param User
     * @return
     * @throws BusinessServiceException
     */
    public User update(UserData user) throws BusinessServiceException;

    /**
     * Deletes a User.
     * @param code
	 * @return The code of the deleted User
     */
    public String delete(String code) throws BusinessServiceException;


}