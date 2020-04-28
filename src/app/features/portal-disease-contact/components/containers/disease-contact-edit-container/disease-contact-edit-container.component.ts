import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalDiseaseContactModuleState } from "../../../store/portal-disease-contact-module.state";
import { DiseaseContactEditContainerController } from "./disease-contact-edit-container.controller";

@Component({
    selector: 'disease-contact-edit-container',
    templateUrl: './disease-contact-edit-container.component.html',
    styleUrls: ['./disease-contact-edit-container.scss']
})
export class DiseaseContactEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalDiseaseContactModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, DiseaseContactEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the DiseaseContactEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
