/**
 * 
 */
package com.alstrabank.writing.content.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstrabank.writing.content.data.ContentOrderData;
import com.alstrabank.writing.content.model.ContentOrder;
import com.alstrabank.writing.content.service.entity.ContentOrderEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class ContentOrderServiceImpl extends AbstractBusinessService implements ContentOrderService {
	
	@Inject
	ContentOrderEntityService contentOrderEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public ContentOrder findByCode(String code) throws BusinessServiceException {
		return contentOrderEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<ContentOrder> findByCriteria(EntityDataCriteria<ContentOrder> criteria) throws BusinessServiceException {
		return contentOrderEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public ContentOrder create(ContentOrderData data) throws BusinessServiceException {
		return contentOrderEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public ContentOrder update(String code, ContentOrderData data) throws BusinessServiceException {
		return contentOrderEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		contentOrderEntityService.delete(code);
	}


}
