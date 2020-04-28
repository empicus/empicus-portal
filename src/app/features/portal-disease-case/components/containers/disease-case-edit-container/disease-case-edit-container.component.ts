import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalDiseaseCaseModuleState } from "../../../store/portal-disease-case-module.state";
import { DiseaseCaseEditContainerController } from "./disease-case-edit-container.controller";

@Component({
    selector: 'disease-case-edit-container',
    templateUrl: './disease-case-edit-container.component.html',
    styleUrls: ['./disease-case-edit-container.scss']
})
export class DiseaseCaseEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalDiseaseCaseModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, DiseaseCaseEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the DiseaseCaseEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
