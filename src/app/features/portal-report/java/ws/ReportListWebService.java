/**
 * 
 */
package com.alstradocs.empicus.report.ws;

import java.util.List;
import java.util.stream.Collectors;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.alstradocs.empicus.report.model.Report;
import com.alstradocs.empicus.report.service.ReportService;
import com.cloderia.enterprise.model.ArtifactData;
import com.cloderia.enterprise.model.EntityDataCriteria;
import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.util.ListWebServiceUtil;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "reportList")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_GET })
public class ReportListWebService extends AbstractWebService implements WebService {
	
	@Inject
	ReportService reportService;
	
	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		EntityDataCriteria<Report> criteria = new EntityDataCriteria<Report>(Report.ARTIFACT_NAME, Report.class);
		List<ArtifactData> items = reportService.findByCriteria(criteria)
			.stream()
			.map((item) -> item.toEntityData())
			.collect(Collectors.toList());
		return new ResponsePayloadData(items);
	}

	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
		ListWebServiceUtil.validateRequest(requestData);
	}
}
