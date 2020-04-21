import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalAcademicModuleState } from "../../store/portal-academic-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitAcademicOrderFormSuccessAction, 
    submitAcademicOrderFormFailureAction 
} from "../../store/actions/academic-order-form/academic-order-form.actions";


@Injectable({
    providedIn: 'root'
})
export class AcademicOrderFormService {

    constructor(private store: Store<PortalAcademicModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'academicOrderCreate').subscribe((data) => {
                this.store.dispatch(submitAcademicOrderFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitAcademicOrderFormFailureAction({data: new ErrorData(error, requestData)}))
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

