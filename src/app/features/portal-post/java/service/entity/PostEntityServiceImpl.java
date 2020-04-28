/**
 * 
 */
package com.alstradocs.empicus.post.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.post.data.PostData;
import com.alstradocs.empicus.post.model.Post;

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
public class PostEntityServiceImpl extends AbstractBusinessService implements PostEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public PostEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public PostEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.post.service.PostFinderService#findById(java.lang.
	 * Long)
	 */
	public Post findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, Post.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.post.service.PostFinderService#findByCode(java.lang
	 * .String)
	 */
	public Post findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, Post.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.post.service.PostFinderService#findPostByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<Post> findByCriteria(EntityDataCriteria<Post> criteria) throws BusinessDataNotFoundException {
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
	public Post create(PostData data) throws BusinessServiceException {
		try {
			Post post = new Post();
			return dataService.create(post);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param Post
     * @return
     * @throws BusinessServiceException
     */
    public Post update(String code, PostData postData) throws BusinessServiceException {
		try {
			Post post = dataService.findByCode(code, Post.class);
			return dataService.update(code, post);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Post not found");
		}
	}


    /**
     * @param code
     * @param Post
     * @return
     * @throws BusinessServiceException
     */
    public Post update(PostData postData) throws BusinessServiceException {
		try {
			Post post = new Post();
			return dataService.update(post.getCode(), post);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Post not found");
		}
	}

    /**
     * Deletes a Post.
     * @param code
	 * @return The code of the deleted Post
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, Post.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Post not found");
		}
	}
}