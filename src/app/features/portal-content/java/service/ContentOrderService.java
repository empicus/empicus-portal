/**
 * 
 */
package com.alstrabank.writing.content.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstrabank.writing.content.data.ContentOrderData;
import com.alstrabank.writing.content.model.ContentOrder;

/**
 * @author edward
 *
 */
public interface ContentOrderService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public ContentOrder findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<ContentOrder> findByCriteria(EntityDataCriteria<ContentOrder> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public ContentOrder create(ContentOrderData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public ContentOrder update(String code, ContentOrderData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
