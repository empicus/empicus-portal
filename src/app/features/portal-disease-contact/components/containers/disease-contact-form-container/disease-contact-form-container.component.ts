import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalDiseaseContactModuleState } from "../../../store/portal-disease-contact-module.state";
import { DiseaseContactFormContainerController } from "./disease-contact-form-container.controller";

@Component({
    selector: 'disease-contact-form-container',
    templateUrl: './disease-contact-form-container.component.html',
    styleUrls: ['./disease-contact-form-container.scss']
})
export class DiseaseContactFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalDiseaseContactModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, DiseaseContactFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.diseaseContactData;
        super.onUiComponentInit(contextData);
    }
}
