import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { UiComponentUtils, UiContextData, DialogContainerComponent, DialogContainerComponentController } from 'helion-ui-components';
import { AuthModuleState } from '../../../store/auth-module.state';
import { ResetPasswordDialogController } from "./reset-password-dialog.controller";

@Component({
    selector: 'app-reset-password-dialog',
    templateUrl: './reset-password-dialog.component.html',
    styleUrls: ['./reset-password-dialog.component.scss']
})
export class ResetPasswordDialogComponent extends DialogContainerComponent {

    constructor(private route: ActivatedRoute, 
        private uiNotificationStore: Store<UiNotificationModuleState>, store: Store<AuthModuleState>) 
    {
        super(store)
        this.uiController = <DialogContainerComponentController>UiComponentUtils.initController(this, ResetPasswordDialogController);
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