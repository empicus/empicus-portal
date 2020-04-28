/**
 * 
 */
package com.alstradocs.empicus.report.service.entity;

import java.util.List;
import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.report.data.ReportData;
import com.alstradocs.empicus.report.model.Report;

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
public class ReportEntityServiceImpl extends AbstractBusinessService implements ReportEntityService {

	@Inject
	@JPADataService
	DataService dataService;
	
	/**
	 * 
	 */
	public ReportEntityServiceImpl() {
		super();
	}

	/**
	 * @param dataService
	 */
	public ReportEntityServiceImpl(DataService dataService) {
		super();
		this.dataService = dataService;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.report.service.ReportFinderService#findById(java.lang.
	 * Long)
	 */
	public Report findById(Long id) throws BusinessDataNotFoundException {
		try {
			return dataService.findById(id, Report.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.report.service.ReportFinderService#findByCode(java.lang
	 * .String)
	 */
	public Report findByCode(String code) throws BusinessDataNotFoundException {
		try {
			return dataService.findByCode(code, Report.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException(e);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.alstradocs.empicus.report.service.ReportFinderService#findReportByCriteria(
	 * com.cloderia.alstracoin.core.data.EntityDataCriteria)
	 */
	public List<Report> findByCriteria(EntityDataCriteria<Report> criteria) throws BusinessDataNotFoundException {
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
	public Report create(ReportData data) throws BusinessServiceException {
		try {
			Report report = new Report();
			return dataService.create(report);
		} catch (DuplicateDataException e) {
			throw new DuplicateBusinessDataException("Individual already exists");
		}
	}


    /**
     * @param code
     * @param Report
     * @return
     * @throws BusinessServiceException
     */
    public Report update(String code, ReportData reportData) throws BusinessServiceException {
		try {
			Report report = dataService.findByCode(code, Report.class);
			return dataService.update(code, report);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Report not found");
		}
	}


    /**
     * @param code
     * @param Report
     * @return
     * @throws BusinessServiceException
     */
    public Report update(ReportData reportData) throws BusinessServiceException {
		try {
			Report report = new Report();
			return dataService.update(report.getCode(), report);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Report not found");
		}
	}

    /**
     * Deletes a Report.
     * @param code
	 * @return The code of the deleted Report
     */
    public String delete(String code) throws BusinessServiceException {
		try {
			return dataService.delete(code, Report.class);
		} catch (DataNotFoundException e) {
			e.printStackTrace();
			throw new BusinessDataNotFoundException("Report not found");
		}
	}
}