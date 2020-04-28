/**
 * 
 */
package com.alstradocs.empicus.post.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.post.data.PostData;
import com.alstradocs.empicus.post.model.Post;
import com.alstradocs.empicus.post.service.entity.PostEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class PostServiceImpl extends AbstractBusinessService implements PostService {
	
	@Inject
	PostEntityService postEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Post findByCode(String code) throws BusinessServiceException {
		return postEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<Post> findByCriteria(EntityDataCriteria<Post> criteria) throws BusinessServiceException {
		return postEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Post create(PostData data) throws BusinessServiceException {
		return postEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Post update(String code, PostData data) throws BusinessServiceException {
		return postEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		postEntityService.delete(code);
	}


}
