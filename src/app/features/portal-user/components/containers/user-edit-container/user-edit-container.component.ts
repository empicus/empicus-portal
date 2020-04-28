import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalUserModuleState } from "../../../store/portal-user-module.state";
import { UserEditContainerController } from "./user-edit-container.controller";

@Component({
    selector: 'user-edit-container',
    templateUrl: './user-edit-container.component.html',
    styleUrls: ['./user-edit-container.scss']
})
export class UserEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalUserModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, UserEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the UserEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
