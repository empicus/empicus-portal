package com.alstrabank.writing.content.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstrabank.writing.content.data.ContentOrderData;
import com.alstrabank.writing.content.model.ContentOrder;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface ContentOrderEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public ContentOrder findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public ContentOrder findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<ContentOrder> findByCriteria(EntityDataCriteria<ContentOrder> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public ContentOrder create(ContentOrderData data) throws BusinessServiceException;

    /**
     * @param code
     * @param ContentOrder
     * @return
     * @throws BusinessServiceException
     */
    public ContentOrder update(String code, ContentOrderData data) throws BusinessServiceException;

    /**
     * @param code
     * @param ContentOrder
     * @return
     * @throws BusinessServiceException
     */
    public ContentOrder update(ContentOrderData contentOrder) throws BusinessServiceException;

    /**
     * Deletes a ContentOrder.
     * @param code
	 * @return The code of the deleted ContentOrder
     */
    public String delete(String code) throws BusinessServiceException;


}