import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { AuthModuleState } from "../../../store/auth-module.state";
import { SignupContainerController } from "./signup-container.controller";

@Component({
    selector: 'signup-container',
    templateUrl: './signup-container.component.html',
    styleUrls: ['./signup-container.scss']
})
export class SignupContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<AuthModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, SignupContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.signupContainerData;
        super.onUiComponentInit(contextData);
    }
}
