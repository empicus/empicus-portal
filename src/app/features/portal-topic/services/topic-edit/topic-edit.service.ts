import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalTopicModuleState } from "../../store/portal-topic-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitTopicFormSuccessAction, 
    submitTopicFormFailureAction 
} from "../../store/actions/topic-form/topic-form.actions";


@Injectable({
    providedIn: 'root'
})
export class TopicEditService {

    constructor(private store: Store<PortalTopicModuleState>, 
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'topicEdit').subscribe((data) => {
                this.store.dispatch(submitTopicFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitTopicFormFailureAction({data: new ErrorData(error, requestData)}))
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

