import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalProjectModuleState } from "../../store/portal-project-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitProjectFormSuccessAction, 
    submitProjectFormFailureAction 
} from "../../store/actions/project-form/project-form.actions";


@Injectable({
    providedIn: 'root'
})
export class ProjectEditService {

    constructor(private store: Store<PortalProjectModuleState>, 
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'projectEdit').subscribe((data) => {
                this.store.dispatch(submitProjectFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitProjectFormFailureAction({data: new ErrorData(error, requestData)}))
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

