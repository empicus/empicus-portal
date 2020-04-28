/**
 * 
 */
package com.alstradocs.empicus.conversation.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.conversation.data.ConversationData;
import com.alstradocs.empicus.conversation.model.Conversation;

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
public class ConversationEntityServiceImpl extends AbstractBusinessService implements ConversationEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public ConversationEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public ConversationEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.conversation.service.ConversationFinderService#findById(java.lang.
	 * Long)
	 */
	public Conversation findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, Conversation.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.conversation.service.ConversationFinderService#findByCode(java.lang
	 * .String)
	 */
	public Conversation findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, Conversation.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.conversation.service.ConversationFinderService#findConversationByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<Conversation> findByCriteria(EntityDataCriteria<Conversation> criteria) throws BusinessDataNotFoundException {
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
	public Conversation create(ConversationData data) throws BusinessServiceException {
		try {
			Conversation conversation = new Conversation();
			return dataService.create(conversation);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param Conversation
     * @return
     * @throws BusinessServiceException
     */
    public Conversation update(String code, ConversationData conversationData) throws BusinessServiceException {
		try {
			Conversation conversation = dataService.findByCode(code, Conversation.class);
			return dataService.update(code, conversation);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Conversation not found");
		}
	}


    /**
     * @param code
     * @param Conversation
     * @return
     * @throws BusinessServiceException
     */
    public Conversation update(ConversationData conversationData) throws BusinessServiceException {
		try {
			Conversation conversation = new Conversation();
			return dataService.update(conversation.getCode(), conversation);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Conversation not found");
		}
	}

    /**
     * Deletes a Conversation.
     * @param code
	 * @return The code of the deleted Conversation
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, Conversation.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Conversation not found");
		}
	}
}