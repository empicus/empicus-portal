package com.alstradocs.empicus.conversation.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.conversation.data.ConversationData;
import com.alstradocs.empicus.conversation.model.Conversation;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface ConversationEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public Conversation findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Conversation findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<Conversation> findByCriteria(EntityDataCriteria<Conversation> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Conversation create(ConversationData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Conversation
     * @return
     * @throws BusinessServiceException
     */
    public Conversation update(String code, ConversationData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Conversation
     * @return
     * @throws BusinessServiceException
     */
    public Conversation update(ConversationData conversation) throws BusinessServiceException;

    /**
     * Deletes a Conversation.
     * @param code
	 * @return The code of the deleted Conversation
     */
    public String delete(String code) throws BusinessServiceException;


}