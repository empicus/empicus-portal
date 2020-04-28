import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalReportModuleState } from "../../../store/portal-report-module.state";
import { ReportEditContainerController } from "./report-edit-container.controller";

@Component({
    selector: 'report-edit-container',
    templateUrl: './report-edit-container.component.html',
    styleUrls: ['./report-edit-container.scss']
})
export class ReportEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalReportModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ReportEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the ReportEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
