/**
 * 
 */
package com.alstradocs.empicus.report.service;

import java.util.List;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.alstradocs.empicus.report.data.ReportData;
import com.alstradocs.empicus.report.model.Report;

/**
 * @author edward
 *
 */
public interface ReportService {
	

	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Report findByCode(String code) throws BusinessServiceException;

	/**
	 * @param criteria
	 * @return
	 */
	public List<Report> findByCriteria(EntityDataCriteria<Report> criteria) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Report create(ReportData data) throws BusinessServiceException;
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Report update(String code, ReportData data) throws BusinessServiceException;
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException;
}
