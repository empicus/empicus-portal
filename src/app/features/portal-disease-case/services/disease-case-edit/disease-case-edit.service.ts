import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalDiseaseCaseModuleState } from "../../store/portal-disease-case-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitDiseaseCaseFormSuccessAction, 
    submitDiseaseCaseFormFailureAction 
} from "../../store/actions/disease-case-form/disease-case-form.actions";


@Injectable({
    providedIn: 'root'
})
export class DiseaseCaseEditService {

    constructor(private store: Store<PortalDiseaseCaseModuleState>, 
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'diseaseCaseEdit').subscribe((data) => {
                this.store.dispatch(submitDiseaseCaseFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitDiseaseCaseFormFailureAction({data: new ErrorData(error, requestData)}))
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

