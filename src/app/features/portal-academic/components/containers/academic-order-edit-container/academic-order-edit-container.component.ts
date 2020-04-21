import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalAcademicModuleState } from "../../../store/portal-academic-module.state";
import { AcademicOrderEditContainerController } from "./academic-order-edit-container.controller";

@Component({
    selector: 'academic-order-edit-container',
    templateUrl: './academic-order-edit-container.component.html',
    styleUrls: ['./academic-order-edit-container.scss']
})
export class AcademicOrderEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalAcademicModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicOrderEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the AcademicOrderEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
