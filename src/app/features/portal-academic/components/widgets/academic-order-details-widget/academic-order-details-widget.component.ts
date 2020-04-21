import { Component, Input } from '@angular/core';
import { ArtifactData, AbstractData } from 'helion-core';
import { WidgetComponent, UiComponentUtils, UiContextData, UiEventData } from 'helion-ui-components';
import { AcademicOrderDetailsWidgetController } from './academic-order-details-widget.controller';
import { UI_NOTIFICATION_TY_SUCCESS, UiNotificationModuleState, openUiNotificationAction, closeUiDialogAction, UI_NOTIFICATION_TY_ERROR } from 'helion-ui-notifications';
import { Store } from '@ngrx/store';
import { PaymentData } from 'src/app/features/portal-shared/data/payment.data';
import BigNumber from 'bignumber.js';
import { PAYMENT_OUTCOME_SUCCESS, PAYMENT_OUTCOME_ERROR } from 'src/app/features/portal-shared/util/paypal.constants';
import { submitConfirmClientPaymentRequestAction } from 'src/app/features/assignment/store/actions/service-order.actions';
import { PortalAssignmentModuleState } from 'src/app/features/assignment/store/assignment-module.state';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'academic-order-details-widget',
    templateUrl: './academic-order-details-widget.component.html',
    styleUrls: ['./academic-order-details-widget.scss']
})
export class AcademicOrderDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    paymentData: PaymentData;

    paymentRequired: boolean;

    constructor(private store: Store<PortalAssignmentModuleState>,
        private uiStore: Store<UiModuleState>,
        private uiNotificationStore: Store<UiNotificationModuleState>) {
        super();
        this.uiController = UiComponentUtils.initController(this, AcademicOrderDetailsWidgetController);
    }

	/**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>) {
        super.onUiComponentInit(contextData);
        if(this.artifactData?.fieldData['statusId'].value['code'] === 'PENDING') {
            this.paymentRequired = true;
            this.paymentData = new PaymentData();
            let amount: BigNumber = new BigNumber(this.artifactData.fieldData['total'].value);
            this.paymentData.amount = amount.toFixed(2);
            this.paymentData.code = this.artifactData.fieldData['code'].value;
            this.paymentData.description = this.artifactData.fieldData['title'].value;
        }
    }
    
    /**
     * 
     * @param uiEventData 
     */
    onPaymentEvent(uiEventData: UiEventData) {
        // Close the payment dialog
        if(uiEventData.eventType === PAYMENT_OUTCOME_SUCCESS) {
            this.paymentRequired = false;
            this.store.dispatch(submitConfirmClientPaymentRequestAction({ data: uiEventData.eventData }));
        }
        if(uiEventData.eventType === PAYMENT_OUTCOME_ERROR) {
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: { type: UI_NOTIFICATION_TY_ERROR,  message: uiEventData.eventData }
            }))
        }
    }


}

