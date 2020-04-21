import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromCoreModule from 'helion-core';;
import { RequestUtils, DataService, RequestData, ResponseData } from "helion-core-http";
import { PortalAssignmentModuleState } from "../../store/assignment-module.state";
import * as fromServiceOrderConstants from '../../util/client-order.constants'
import { ServiceOrderData } from "../../data/service-order/service-order.data"
import * as fromServiceOrderActions from "../../store/actions/service-order.actions";
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class ServiceOrderDataService {

    notifyMsg: ' Saving your order, please wait';

    constructor(private httpService: DataService,
        private store: Store<PortalAssignmentModuleState>) {
    }

    /**
     * 
     * @param serviceOrderData 
     */
    submit(serviceOrderData: ServiceOrderData) {
        let requestData: RequestData<ServiceOrderData> = this.toRequestData(serviceOrderData);

        if (serviceOrderData['filesToUpload'].length !== 0) {
            this.createAndUpload(requestData).subscribe((data) => {
                this.store.dispatch(fromServiceOrderActions.submitServiceOrderSuccessAction({ data: data.item }));
            },(error) => this.store.dispatch(fromServiceOrderActions.submitServiceOrderFailureAction({ data: new fromCoreModule.ErrorData(error, requestData) })));
        }
        else {
            this.httpService.create(requestData).subscribe((data) => {
                this.store.dispatch(fromServiceOrderActions.submitServiceOrderSuccessAction({ data: data.item }));
            },(error) => this.store.dispatch(fromServiceOrderActions.submitServiceOrderFailureAction({ data: new fromCoreModule.ErrorData(error, requestData) })));
        }
    }

    /**
     * 
     * @param requestData 
     */
    createAndUpload(requestData: RequestData<ServiceOrderData>): Observable<any> {
        return this.httpService.create(requestData).pipe(concatMap((responseData: ResponseData) => {
            if(responseData.item) {
                return this.submitUpload(requestData, responseData);
            }
            return of(responseData)
        }));
    }

    /**
     * 
     * @param requestData 
     */
    submitUpload(requestData: RequestData<ServiceOrderData>, responseData: ResponseData) {
        const fileFormData = this.getFileUploadData(requestData.data);
        fileFormData.append('orderCode', responseData.item.fieldData['code'].value);
        return this.httpService.upload(fileFormData).pipe(map(() => responseData));
    }

    /**
     * 
     * @param serviceOrderData 
     */
    getFileUploadData(serviceOrderData: ServiceOrderData): FormData {
        const fileFormData = new FormData();
        for (var i = 0; i < serviceOrderData.filesToUpload.length; i++) {
            fileFormData.append('filesToUpload', serviceOrderData['filesToUpload'][i].file);
        }
        return fileFormData;
    }

    /**
     * 
     * @param serviceOrderData 
     */
    toRequestData(serviceOrderData: ServiceOrderData): RequestData<ServiceOrderData> {
        let serviceOrderEndpoint = fromServiceOrderConstants.ACADEMIC_ORDER_ENDPOINT;
        if(serviceOrderData.serviceOrderType !== fromServiceOrderConstants.SERVICE_ORDER_TYPE_ACADEMIC) {
            serviceOrderEndpoint = fromServiceOrderConstants.CONTENT_ORDER_ENDPOINT;
        }
        return  RequestUtils.fromDataObj(
            serviceOrderData, 
            serviceOrderEndpoint, { notify: true, notifyMsg: this.notifyMsg }
        );
    }
}