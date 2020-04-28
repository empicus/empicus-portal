import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalDiseaseModuleState } from "../../store/portal-disease-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitDiseaseFormSuccessAction, 
    submitDiseaseFormFailureAction 
} from "../../store/actions/disease-form/disease-form.actions";


@Injectable({
    providedIn: 'root'
})
export class DiseaseFormService {

    constructor(private store: Store<PortalDiseaseModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'diseaseCreate').subscribe((data) => {
                this.store.dispatch(submitDiseaseFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitDiseaseFormFailureAction({data: new ErrorData(error, requestData)}))
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

