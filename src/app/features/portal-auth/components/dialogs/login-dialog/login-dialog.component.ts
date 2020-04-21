import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { Actions, ofType } from '@ngrx/effects';
import { DialogContainerComponent, UiComponentUtils, UiContextData, DialogContainerComponentController } from 'helion-ui-components';
import { AuthModuleState } from '../../../store/auth-module.state';
import { LoginDialogController } from './login-dialog.controller';
import * as formActions from '../../../store/actions/authentication/authentication.actions';
import { UiNotificationModuleState, closeUiDialogAction } from 'helion-ui-notifications';

declare var jQuery: any;

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent extends DialogContainerComponent {

    constructor(private route: ActivatedRoute, 
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, store: Store<AuthModuleState>) {
        super(store)
        this.uiController = <DialogContainerComponentController>UiComponentUtils.initController(this, LoginDialogController);
        this.onAuthenticationSuccess();
    }

    /**
     * 
     */
    private onAuthenticationSuccess() {
        let that = this;
        this.actions$.pipe(ofType(formActions.submitLoginRequestSuccessAction)).subscribe((actionObj) => { 
            this.uiNotificationStore.dispatch(closeUiDialogAction({
                data: that.uiController.uiDialogData
            }))
        });
    }

    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.loginContainerData;
        super.onUiComponentInit(contextData);
    }
}
