/**
 * 
 */
package com.alstradocs.empicus.report.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.cloderia.enterprise.model.EntityDataCriteria;
import com.alstradocs.empicus.report.data.ReportData;
import com.alstradocs.empicus.report.model.Report;
import com.alstradocs.empicus.report.service.entity.ReportEntityService;
import com.cloderia.enterprise.service.AbstractBusinessService;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author edward
 *
 */
@Stateless
public class ReportServiceImpl extends AbstractBusinessService implements ReportService {
	
	@Inject
	ReportEntityService reportEntityService;


	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Report findByCode(String code) throws BusinessServiceException {
		return reportEntityService.findByCode(code);
	}

	/**
	 * @param criteria
	 * @return
	 */
	public List<Report> findByCriteria(EntityDataCriteria<Report> criteria) throws BusinessServiceException {
		return reportEntityService.findByCriteria(criteria);
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Report create(ReportData data) throws BusinessServiceException {
		return reportEntityService.create(data);	
	}
	
	/**
	 * @param data
	 * @throws BusinessDataNotFoundException
	 */
	public Report update(String code, ReportData data) throws BusinessServiceException {
		return reportEntityService.update(code, data);
	}
	
	/**
	 * @param code
	 * @throws BusinessDataNotFoundException
	 */
	public void delete(String code) throws BusinessServiceException {
		reportEntityService.delete(code);
	}


}
