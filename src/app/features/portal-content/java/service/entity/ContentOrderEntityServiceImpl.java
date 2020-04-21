/**
 * 
 */
package com.alstrabank.writing.content.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstrabank.writing.content.data.ContentOrderData;
import com.alstrabank.writing.content.model.ContentOrder;

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
public class ContentOrderEntityServiceImpl extends AbstractBusinessService implements ContentOrderEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public ContentOrderEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public ContentOrderEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstrabank.writing.content.service.ContentOrderFinderService#findById(java.lang.
	 * Long)
	 */
	public ContentOrder findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, ContentOrder.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstrabank.writing.content.service.ContentOrderFinderService#findByCode(java.lang
	 * .String)
	 */
	public ContentOrder findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, ContentOrder.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstrabank.writing.content.service.ContentOrderFinderService#findContentOrderByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<ContentOrder> findByCriteria(EntityDataCriteria<ContentOrder> criteria) throws BusinessDataNotFoundException {
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
	public ContentOrder create(ContentOrderData data) throws BusinessServiceException {
		try {
			ContentOrder contentOrder = new ContentOrder();
			return dataService.create(contentOrder);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param ContentOrder
     * @return
     * @throws BusinessServiceException
     */
    public ContentOrder update(String code, ContentOrderData contentOrderData) throws BusinessServiceException {
		try {
			ContentOrder contentOrder = dataService.findByCode(code, ContentOrder.class);
			return dataService.update(code, contentOrder);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("ContentOrder not found");
		}
	}


    /**
     * @param code
     * @param ContentOrder
     * @return
     * @throws BusinessServiceException
     */
    public ContentOrder update(ContentOrderData contentOrder) throws BusinessServiceException {
		try {
			return dataService.update(contentOrder.getCode(), contentOrder);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("ContentOrder not found");
		}
	}

    /**
     * Deletes a ContentOrder.
     * @param code
	 * @return The code of the deleted ContentOrder
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, ContentOrder.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("ContentOrder not found");
		}
	}
}