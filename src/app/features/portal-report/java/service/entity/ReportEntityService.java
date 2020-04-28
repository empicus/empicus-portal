package com.alstradocs.empicus.report.service.entity;

import java.util.List;

import com.cloderia.enterprise.model.data.BaseData;
import com.alstradocs.empicus.report.data.ReportData;
import com.alstradocs.empicus.report.model.Report;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;

/**
 * @author Edward Banfa
 */
public interface ReportEntityService {

    /**
	 * @param id
	 * @return
	 * @throws BusinessServiceException
	 */
	public Report findById(Long id) throws BusinessDataNotFoundException;
	
	/**
	 * @param code
	 * @return
	 * @throws BusinessServiceException
	 */
	public Report findByCode(String code) throws BusinessDataNotFoundException;
	
	/**
	 * @param criteria
	 * @return
	 * @throws BusinessServiceException
	 */
	public List<Report> findByCriteria(EntityDataCriteria<Report> criteria) throws BusinessServiceException;
	
	
	/**
	 * @param data
	 * @return
	 * @throws BusinessServiceException
	 */
	public Report create(ReportData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Report
     * @return
     * @throws BusinessServiceException
     */
    public Report update(String code, ReportData data) throws BusinessServiceException;

    /**
     * @param code
     * @param Report
     * @return
     * @throws BusinessServiceException
     */
    public Report update(ReportData report) throws BusinessServiceException;

    /**
     * Deletes a Report.
     * @param code
	 * @return The code of the deleted Report
     */
    public String delete(String code) throws BusinessServiceException;


}