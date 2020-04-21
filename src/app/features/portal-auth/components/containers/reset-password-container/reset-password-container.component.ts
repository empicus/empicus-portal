import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { AuthModuleState } from "../../../store/auth-module.state";
import { ResetPasswordContainerController } from "./reset-password-container.controller";

@Component({
    selector: 'reset-password-container',
    templateUrl: './reset-password-container.component.html',
    styleUrls: ['./reset-password-container.scss']
})
export class ResetPasswordContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<AuthModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ResetPasswordContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.resetPasswordContainerData;
        super.onUiComponentInit(contextData);
    }
}
