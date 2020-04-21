import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import * as fromServiceOrderActions from '../actions/service-order.actions';
import { 
    UiNotificationModuleState, 
    openUiNotificationAction,
    UI_NOTIFICATION_TY_SUCCESS,
    openUiDialogAction
} from 'helion-ui-notifications';
import { ServiceOrderService } from '../../services/service-order/service-order.service';
import { ServiceOrderPaymentService } from '../../services/service-order/payment.service';

@Injectable()

export class ServiceOrderEffects {

    constructor(
        private actions$: Actions,
        private orderFormService: ServiceOrderService,
        private paymentService: ServiceOrderPaymentService,
        private uiNotificationState: Store<UiNotificationModuleState>) { }

    /**
     * 
     */
    submitServiceOrderRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromServiceOrderActions.submitServiceOrderRequestAction),
        map(action => { this.orderFormService.submit(action.data) })),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitServiceOrderSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromServiceOrderActions.submitServiceOrderSuccessAction),
        map((action) => {
            this.uiNotificationState.dispatch(openUiDialogAction({
                data: { data: action.data, uiComponentName: 'paypalCheckoutDialog' }
            }));
        })),
        { dispatch: false }
    );

    /**
     * 
     */
    submitServiceOrderErrorEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromServiceOrderActions.submitServiceOrderFailureAction),
        map((action) => {  })),
        { dispatch: false }
    );

    /**
     * 
     */
    submitConfirmClientPaymentRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromServiceOrderActions.submitConfirmClientPaymentRequestAction),
        map(action => { this.paymentService.confirmPayment(action.data)  })),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitConfirmClientPaymentSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromServiceOrderActions.submitConfirmClientPaymentSuccessAction),
        map((action) => { this.paymentService.onPaymentSuccess(action.data); })),
        { dispatch: false }
    );

    /**
     * 
     */
    submitConfirmClientPaymentErrorEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromServiceOrderActions.submitConfirmClientPaymentFailureAction),
        map((action) => {  })),
        { dispatch: false }
    );

    
    
}
