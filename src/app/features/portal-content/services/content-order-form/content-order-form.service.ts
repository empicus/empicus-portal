import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalContentModuleState } from "../../store/portal-content-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitContentOrderFormSuccessAction, 
    submitContentOrderFormFailureAction 
} from "../../store/actions/content-order-form/content-order-form.actions";


@Injectable({
    providedIn: 'root'
})
export class ContentOrderFormService {

    constructor(private store: Store<PortalContentModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'contentOrderCreate').subscribe((data) => {
                this.store.dispatch(submitContentOrderFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitContentOrderFormFailureAction({data: new ErrorData(error, requestData)}))
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

