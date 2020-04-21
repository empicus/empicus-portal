import { Injectable, Type } from '@angular/core';
import { LoginDialogComponent } from '../../features/portal-auth/components/dialogs/login-dialog/login-dialog.component';
import { SignupDialogComponent } from '../../features/portal-auth/components/dialogs/signup-dialog/signup-dialog.component';
import { ResetPasswordDialogComponent } from '../../features/portal-auth/components/dialogs/reset-password-dialog/reset-password-dialog.component';
import { PaypalCheckoutDialogComponent } from '../../features/portal-shared/components/dialogs/paypal-checkout-dialog/paypal-checkout-dialog.component';

@Injectable()
export class ClientUiDialogsMapService {
    uiDialogMap = {
        'loginDialog': LoginDialogComponent,
        'signupDialog': SignupDialogComponent,
        'resetPasswordDialog': ResetPasswordDialogComponent,
        'paypalCheckoutDialog': PaypalCheckoutDialogComponent,
    };

    /**
     * 
     * @param uiComponentName 
     */
    getComponent(uiComponentName: string): Type<any>{
        return this.uiDialogMap[uiComponentName];
    }
}