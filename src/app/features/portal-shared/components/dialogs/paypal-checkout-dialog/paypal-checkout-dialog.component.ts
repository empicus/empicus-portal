import { Component, ElementRef } from '@angular/core';
import { DialogContainerComponent, DialogContainerComponentController, UiComponentUtils, UiDialogData, UiEventData } from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { UiNotificationModuleState, closeUiDialogAction, openUiNotificationAction, UI_NOTIFICATION_TY_ERROR } from 'helion-ui-notifications';
import { PaypalCheckoutDialogController } from "./paypal-checkout-dialog.controller";
import { PaymentData } from '../../../data/payment.data';
import { ArtifactData } from 'helion-core';
import BigNumber from 'bignumber.js';
import { PAYMENT_OUTCOME_SUCCESS, PAYMENT_OUTCOME_ERROR } from '../../../util/paypal.constants';

@Component({
    selector: 'app-paypal-checkout-dialog',
    templateUrl: './paypal-checkout-dialog.component.html',
    styleUrls: ['./paypal-checkout-dialog.component.scss']
})
export class PaypalCheckoutDialogComponent extends DialogContainerComponent {

    paymentData: PaymentData = new PaymentData();
    constructor(
        private host: ElementRef<HTMLElement>, 
        private uiNotificationStore: Store<UiNotificationModuleState>) {
        super(uiNotificationStore)
        this.uiController = <DialogContainerComponentController>UiComponentUtils.initController(this, PaypalCheckoutDialogController);
    }

    /**
	 * 
	 * @param uiDialogData 
	 */
    open(uiDialogData: UiDialogData) {
        super.open(uiDialogData)
        let artifactData: ArtifactData = uiDialogData.data;
        let amount: BigNumber = new BigNumber(artifactData.fieldData['total'].value);
        this.paymentData.amount = amount.toFixed(2);
        this.paymentData.code = artifactData.fieldData['code'].value;
        this.paymentData.description = artifactData.fieldData['title'].value;
    }
    
    /**
     * 
     * @param uiEventData 
     */
    onPaymentEvent(uiEventData: UiEventData) {
        let that = this;
        // Close the payment dialog
        this.uiNotificationStore.dispatch(closeUiDialogAction({ data: that.uiController.uiDialogData }));
        
        if(uiEventData.eventType === PAYMENT_OUTCOME_SUCCESS) {
            
        }
        if(uiEventData.eventType === PAYMENT_OUTCOME_ERROR) {
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_ERROR,
                    message: uiEventData.eventData
                }
            }))
        }
        this.host.nativeElement.remove();
    }

}
