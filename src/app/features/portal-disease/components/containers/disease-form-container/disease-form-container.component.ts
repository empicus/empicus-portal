import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalDiseaseModuleState } from "../../../store/portal-disease-module.state";
import { DiseaseFormContainerController } from "./disease-form-container.controller";

@Component({
    selector: 'disease-form-container',
    templateUrl: './disease-form-container.component.html',
    styleUrls: ['./disease-form-container.scss']
})
export class DiseaseFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalDiseaseModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, DiseaseFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.diseaseData;
        super.onUiComponentInit(contextData);
    }
}
