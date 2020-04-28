/**
 * 
 */
package com.alstradocs.empicus.conversation.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.conversation.data.ConversationData;
import com.alstradocs.empicus.conversation.model.Conversation;

/**
 * @author edward
 *
 */
public interface ConversationService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Conversation findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<Conversation> findByCriteria(EntityDataCriteria<Conversation> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Conversation create(ConversationData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Conversation update(String code, ConversationData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
