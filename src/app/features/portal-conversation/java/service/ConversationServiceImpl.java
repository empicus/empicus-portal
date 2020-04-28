/**
 * 
 */
package com.alstradocs.empicus.conversation.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.conversation.data.ConversationData;
import com.alstradocs.empicus.conversation.model.Conversation;
import com.alstradocs.empicus.conversation.service.entity.ConversationEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class ConversationServiceImpl extends AbstractBusinessService implements ConversationService {
	
	@Inject
	ConversationEntityService conversationEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Conversation findByCode(String code) throws BusinessServiceException {
		return conversationEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<Conversation> findByCriteria(EntityDataCriteria<Conversation> criteria) throws BusinessServiceException {
		return conversationEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Conversation create(ConversationData data) throws BusinessServiceException {
		return conversationEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Conversation update(String code, ConversationData data) throws BusinessServiceException {
		return conversationEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		conversationEntityService.delete(code);
	}


}
