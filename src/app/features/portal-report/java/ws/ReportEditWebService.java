/**
 * 
 */
package com.alstradocs.empicus.report.ws;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.ejb.Stateless;
import javax.inject.Inject;


import com.alstradocs.empicus.report.data.ReportData;
import com.alstradocs.empicus.report.service.ReportService;

import com.cloderia.enterprise.service.BusinessServiceException;
import com.cloderia.enterprise.service.data.RequestData;
import com.cloderia.enterprise.service.data.ResponsePayloadData;
import com.cloderia.enterprise.service.exceptions.BusinessDataNotFoundException;
import com.cloderia.enterprise.ws.AbstractWebService;
import com.cloderia.enterprise.ws.WebService;
import com.cloderia.enterprise.ws.annotations.WebServiceAllowedMethods;
import com.cloderia.enterprise.ws.annotations.WebServiceProvider;
import com.cloderia.enterprise.ws.util.WebConstants;

/**
 * @author edward
 *
 */
@Stateless
@WebServiceProvider(name = "reportEdit")
@WebServiceAllowedMethods(names = { WebConstants.REQUEST_METHOD_HTTP_POST })
public class ReportEditWebService extends AbstractWebService implements WebService {
	
	@Inject
	ReportService reportService;

	private final List<String> fields = Stream.of(
		WebConstants.CODE_FIELD
	).collect(Collectors.toList()); 

	@Override
	protected ResponsePayloadData doExecute(RequestData requestData) throws BusinessServiceException {
		
		String code = (String) requestData.getDataItem(WebConstants.CODE_FIELD);

		ReportData data = new ReportData();
		data.setCode(code);
		reportService.update(code, data);
		return new ResponsePayloadData();
	}
	
	@Override
	protected void validateRequest(RequestData requestData) throws BusinessServiceException {
		super.validateRequest(requestData);
		for(String field : fields) {
			if (!requestData.getData().containsKey(field))
				throw new BusinessDataNotFoundException("Insufficient information provided");
		}
	}

}