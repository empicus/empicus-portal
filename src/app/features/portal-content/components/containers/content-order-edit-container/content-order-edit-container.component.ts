import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalContentModuleState } from "../../../store/portal-content-module.state";
import { ContentOrderEditContainerController } from "./content-order-edit-container.controller";

@Component({
    selector: 'content-order-edit-container',
    templateUrl: './content-order-edit-container.component.html',
    styleUrls: ['./content-order-edit-container.scss']
})
export class ContentOrderEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalContentModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentOrderEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the ContentOrderEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
