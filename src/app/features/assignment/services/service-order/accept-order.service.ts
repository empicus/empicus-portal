import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AbstractData, ErrorData, ArtifactData } from 'helion-core';
import { RequestData, ResponseData, DataService } from 'helion-core-http';
import { PortalAssignmentModuleState } from "../../store/assignment-module.state";
import { submitAcceptServiceOrderFailureAction, submitAcceptServiceOrderSuccessAction } from '../../store/actions/service-order.actions';


@Injectable()
export class AcceptOrderService {

    constructor(private httpService: DataService, 
        private store: Store<PortalAssignmentModuleState>) {
    } 

    public submit(orderArtifactData: ArtifactData) {
        let requestData = {
            code: orderArtifactData.fieldData['code'].value
        };
        this.create(requestData, 'clientAcceptOrder').subscribe((data) => {
                this.store.dispatch(submitAcceptServiceOrderSuccessAction({data: data.item}));
            },
            (error) => this.store.dispatch(submitAcceptServiceOrderFailureAction({data: new ErrorData(error, requestData)}))
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
        let request$: Observable<ResponseData> =  this.httpService.create(request);
        return request$;
    }
}

