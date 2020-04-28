package com.alstradocs.empicus.post.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.post.data.PostData;
import com.alstradocs.empicus.post.model.Post;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface PostEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public Post findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Post findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<Post> findByCriteria(EntityDataCriteria<Post> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Post create(PostData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Post
     * @return
     * @throws BusinessServiceException
     */
    public Post update(String code, PostData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Post
     * @return
     * @throws BusinessServiceException
     */
    public Post update(PostData post) throws BusinessServiceException;

    /**
     * Deletes a Post.
     * @param code
	 * @return The code of the deleted Post
     */
    public String delete(String code) throws BusinessServiceException;


}