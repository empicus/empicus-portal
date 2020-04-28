/**
 * 
 */
package com.alstradocs.empicus.post.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.post.data.PostData;
import com.alstradocs.empicus.post.model.Post;

/**
 * @author edward
 *
 */
public interface PostService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Post findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<Post> findByCriteria(EntityDataCriteria<Post> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Post create(PostData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Post update(String code, PostData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
