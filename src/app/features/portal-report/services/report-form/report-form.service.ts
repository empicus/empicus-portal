import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalReportModuleState } from "../../store/portal-report-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitReportFormSuccessAction, 
    submitReportFormFailureAction 
} from "../../store/actions/report-form/report-form.actions";


@Injectable({
    providedIn: 'root'
})
export class ReportFormService {

    constructor(private store: Store<PortalReportModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'reportCreate').subscribe((data) => {
                this.store.dispatch(submitReportFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitReportFormFailureAction({data: new ErrorData(error, requestData)}))
        );
    }

    /**
     * 
     * @param data 
     * @param serviceName 
     */
    public create<T extends AbstractData>(data: T, serviceName: string): Observable<ResponseData> {
        let request: RequestData<T> = new RequestData<T>();
        request.data = data;
        request.serviceName = serviceName;
        request.serviceURL = this.urlService.getAndromedaURL() + serviceName;
        
        return this.httpService.create(request);
    }
}

