import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalDiseaseCaseModuleState } from "../../../store/portal-disease-case-module.state";
import { DiseaseCaseFormContainerController } from "./disease-case-form-container.controller";

@Component({
    selector: 'disease-case-form-container',
    templateUrl: './disease-case-form-container.component.html',
    styleUrls: ['./disease-case-form-container.scss']
})
export class DiseaseCaseFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalDiseaseCaseModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, DiseaseCaseFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.diseaseCaseData;
        super.onUiComponentInit(contextData);
    }
}
