import { Injectable } from '@angular/core';
import { ArtifactData, ErrorData } from 'helion-core';
import { DataService, RequestData, RequestUtils } from 'helion-core-http';
import { Store } from '@ngrx/store';
import { PortalAssignmentModuleState } from '../../store/assignment-module.state';
import { PaymentData } from "../../../portal-shared/data/payment.data";
import { submitConfirmClientPaymentSuccessAction, submitConfirmClientPaymentFailureAction } from '../../store/actions/service-order.actions';
import { UiNotificationModuleState, openUiNotificationAction, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import { navigateToAction, UiModuleState } from 'helion-ui';
import { aowResetStateAction } from '../../store/actions/academic-order-wizard.actions';

@Injectable()
export class ServiceOrderPaymentService {

    constructor(private httpService: DataService,
        private uiStore: Store<UiModuleState>,
        private store: Store<PortalAssignmentModuleState>,
        private uiNotificationState: Store<UiNotificationModuleState>) {
    }

    confirmPayment(data: PaymentData) {
        let requestData: RequestData<PaymentData> = this.toRequestData(data);
        this.httpService.create(requestData).subscribe((data) => {
            this.store.dispatch(submitConfirmClientPaymentSuccessAction({ data: data.item }));
        }, (error) => this.store.dispatch(submitConfirmClientPaymentFailureAction({ data: new ErrorData(error, requestData) })));
    }

    /**
     * 
     * @param artifactData 
     */
    onPaymentSuccess(artifactData: ArtifactData) {
        let that = this;
        this.uiNotificationState.dispatch(openUiNotificationAction({
            data: {
                type: UI_NOTIFICATION_TY_SUCCESS,
                title: 'All Good', 
                message: 'We have recieved your payment and started working on your paper',
                okAction: () => {
                    that.store.dispatch(aowResetStateAction());
                    that.uiStore.dispatch(navigateToAction({ data: { route: '/portal-academic/inprogress', routeData: [] } }))
                }
            }
        }));
    }

    /**
     * 
     * @param serviceOrderData 
     */
    toRequestData(paymentData: PaymentData): RequestData<PaymentData> {
        return RequestUtils.fromDataObj(
            paymentData, 'confirmClientPaymentWebService',
            { notify: true, notifyMsg: 'Processing, please wait...' }
        );
    }

}