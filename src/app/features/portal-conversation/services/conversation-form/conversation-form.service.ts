import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService, UrlService, RequestData, ResponseData } from 'helion-core-http';
import { PortalConversationModuleState } from "../../store/portal-conversation-module.state";
import { AbstractData, ErrorData } from 'helion-core';
import { FormDataUtils } from 'helion-ui-forms';
import { 
    submitConversationFormSuccessAction, 
    submitConversationFormFailureAction 
} from "../../store/actions/conversation-form/conversation-form.actions";


@Injectable({
    providedIn: 'root'
})
export class ConversationFormService {

    constructor(private store: Store<PortalConversationModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    public submit(formData) {
        let requestData = FormDataUtils.trimEntityData(formData);

        this.create(requestData, 'conversationCreate').subscribe((data) => {
                this.store.dispatch(submitConversationFormSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitConversationFormFailureAction({data: new ErrorData(error, requestData)}))
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

