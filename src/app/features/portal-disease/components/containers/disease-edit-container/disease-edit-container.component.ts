import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalDiseaseModuleState } from "../../../store/portal-disease-module.state";
import { DiseaseEditContainerController } from "./disease-edit-container.controller";

@Component({
    selector: 'disease-edit-container',
    templateUrl: './disease-edit-container.component.html',
    styleUrls: ['./disease-edit-container.scss']
})
export class DiseaseEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalDiseaseModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, DiseaseEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the DiseaseEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
