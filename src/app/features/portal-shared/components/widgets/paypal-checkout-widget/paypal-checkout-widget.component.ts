import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PaymentData } from "../../../data/payment.data";
import { WidgetComponent } from 'helion-ui-components';
import { PAYMENT_OUTCOME_SUCCESS, PAYMENT_OUTCOME_ERROR  } from "../../../util/paypal.constants";

declare var paypal;

@Component({
    selector: 'app-paypal-checkout-widget',
    templateUrl: './paypal-checkout-widget.component.html',
    styleUrls: ['./paypal-checkout-widget.component.scss']
})
export class PaypalCheckoutWidgetComponent extends WidgetComponent {

    @Input()
    paymentData: PaymentData;
    
    @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

    paidFor = false;

    ngOnInit() {
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: this.paymentData.description,
                            amount: {
                                currency_code: 'USD',
                                value: this.paymentData.amount
                            }
                        }
                    ],
                    invoice_id: this.paymentData.code,
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                this.paidFor = true;
                this.emit({
                    eventType: PAYMENT_OUTCOME_SUCCESS,
                    eventData: this.paymentData
                });
                
            },
            onError: err => {
                this.emit({
                    eventType: PAYMENT_OUTCOME_ERROR,
                    eventData: this.paymentData
                })
            }
        }).render(this.paypalElement.nativeElement);
    }

}
