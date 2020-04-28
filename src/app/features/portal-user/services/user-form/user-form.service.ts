import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalUserModuleState } from "../../store/portal-user-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitUserFormSuccessAction, 
    submitUserFormFailureAction 
} from "../../store/actions/user-form/user-form.actions";


@Injectable({
    providedIn: 'root'
})
export class UserFormService {

    constructor(private store: Store<PortalUserModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'userCreate').subscribe((data) => {
                this.store.dispatch(submitUserFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitUserFormFailureAction({data: new ErrorData(error, requestData)}))
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

