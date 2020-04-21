import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { UiComponentUtils, UiContextData, DialogContainerComponent, DialogContainerComponentController } from 'helion-ui-components';
import { AuthModuleState } from '../../../store/auth-module.state';
import { SignupDialogController } from './signup-dialog.controller';
import { UiNotificationModuleState, closeUiDialogAction } from 'helion-ui-notifications';
import { Actions, ofType } from '@ngrx/effects';
import * as formActions from '../../../store/actions/authentication/authentication.actions';

@Component({
    selector: 'app-signup-dialog',
    templateUrl: './signup-dialog.component.html',
    styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent extends DialogContainerComponent {

    constructor(private route: ActivatedRoute, private actions$: Actions,
        private uiNotificationStore: Store<UiNotificationModuleState>, store: Store<AuthModuleState>) 
    {
        super(store)
        this.uiController = <DialogContainerComponentController>UiComponentUtils.initController(this, SignupDialogController);
        this.onAuthenticationSuccess();
    }

    /**
     * 
     */
    private onAuthenticationSuccess() {
        let that = this;
        this.actions$.pipe(ofType(formActions.submitSignupRequestSuccessAction)).subscribe((actionObj) => { 
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