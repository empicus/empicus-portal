import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalUserModuleState } from "../../../store/portal-user-module.state";
import { UserFormContainerController } from "./user-form-container.controller";

@Component({
    selector: 'user-form-container',
    templateUrl: './user-form-container.component.html',
    styleUrls: ['./user-form-container.scss']
})
export class UserFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalUserModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, UserFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.userData;
        super.onUiComponentInit(contextData);
    }
}
