import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalAcademicModuleState } from "../../../store/portal-academic-module.state";
import { AcademicOrderFormContainerController } from "./academic-order-form-container.controller";

@Component({
    selector: 'academic-order-form-container',
    templateUrl: './academic-order-form-container.component.html',
    styleUrls: ['./academic-order-form-container.scss']
})
export class AcademicOrderFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalAcademicModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicOrderFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.academicOrderData;
        super.onUiComponentInit(contextData);
    }
}
