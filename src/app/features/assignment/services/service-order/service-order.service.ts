import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { UiNotificationModuleState, openUiDialogAction } from 'helion-ui-notifications';
import * as fromCoreModule from 'helion-core';
import { ServiceOrderData } from '../../data/service-order/service-order.data';

import { AuthenticationData } from '../../../../features/portal-auth/data/auth/authentication.data';
import { CartData } from '../../data/cart/cart.data';
import { PortalAssignmentModuleState } from '../../store/assignment-module.state';
import { CartDataStateService } from "./cart-state.service";
import { ServiceOrderDataService } from "./data.service";
import { ServiceOrderValidatorService } from "./validator.service";
import { ServiceOrderAuthService } from "./auth-state.service";

@Injectable()
export class ServiceOrderService {

    cardData: CartData;

    constructor(
        private dataService: ServiceOrderDataService,
        private cartDataStateService: CartDataStateService,
        private serviceOrderAuthService: ServiceOrderAuthService,
        private serviceOrderValidatorService: ServiceOrderValidatorService,
        private notificationStore: Store<UiNotificationModuleState>) {
        
        serviceOrderAuthService.onAuthenticationSuccess();
        serviceOrderAuthService.onAuthenticationRegisterSuccess();
    }

    /**
     * 
     * @param formData 
     */
    public submit(serviceOrderData: ServiceOrderData) {
        if (!this.serviceOrderAuthService.isUserAuthenticated()) {
            this.serviceOrderAuthService.addToActionQueue(serviceOrderData);
            this.notificationStore.dispatch(openUiDialogAction({ data: { uiComponentName: 'loginDialog' } }));
        }
        else { this.doSubmit(serviceOrderData) }
    }

    /**
     * 
     * @param formData 
     */
    private doSubmit(serviceOrderData: ServiceOrderData) {
        serviceOrderData = this.cartDataStateService.updatePricing(serviceOrderData);
        serviceOrderData = this.serviceOrderValidatorService.validate(serviceOrderData);
        this.dataService.submit(serviceOrderData);
    }


}

