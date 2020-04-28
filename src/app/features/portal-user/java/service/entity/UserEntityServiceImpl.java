/**
 * 
 */
package com.alstradocs.empicus.user.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.user.data.UserData;
import com.alstradocs.empicus.user.model.User;

import com.cloderia.enterprise.core.util.StringUtil;
import com.cloderia.enterprise.data.annotations.JPADataService;
import com.cloderia.enterprise.data.service.DataService;
import com.cloderia.enterprise.data.exceptions.DataNotFoundException;
import com.cloderia.enterprise.data.exceptions.DuplicateDataException;
import com.cloderia.enterprise.data.exceptions.DataServiceException;
import com.cloderia.enterprise.data.service.JPQLQueryBuilderService;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.model.data.BaseData;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.service.exceptions.DuplicateBusinessDataException;

/**
 * @author Edward Banfa
 *
 */
@Stateless
public class UserEntityServiceImpl extends AbstractBusinessService implements UserEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public UserEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public UserEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.user.service.UserFinderService#findById(java.lang.
	 * Long)
	 */
	public User findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, User.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.user.service.UserFinderService#findByCode(java.lang
	 * .String)
	 */
	public User findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, User.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.user.service.UserFinderService#findUserByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<User> findByCriteria(EntityDataCriteria<User> criteria) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCriteria(criteria);
		} catch (DataServiceException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public User create(UserData data) throws BusinessServiceException {
		try {
			User user = new User();
			return dataService.create(user);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param User
     * @return
     * @throws BusinessServiceException
     */
    public User update(String code, UserData userData) throws BusinessServiceException {
		try {
			User user = dataService.findByCode(code, User.class);
			return dataService.update(code, user);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("User not found");
		}
	}


    /**
     * @param code
     * @param User
     * @return
     * @throws BusinessServiceException
     */
    public User update(UserData userData) throws BusinessServiceException {
		try {
			User user = new User();
			return dataService.update(user.getCode(), user);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("User not found");
		}
	}

    /**
     * Deletes a User.
     * @param code
	 * @return The code of the deleted User
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, User.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("User not found");
		}
	}
}