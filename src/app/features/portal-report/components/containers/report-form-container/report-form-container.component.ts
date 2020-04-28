import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalReportModuleState } from "../../../store/portal-report-module.state";
import { ReportFormContainerController } from "./report-form-container.controller";

@Component({
    selector: 'report-form-container',
    templateUrl: './report-form-container.component.html',
    styleUrls: ['./report-form-container.scss']
})
export class ReportFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalReportModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ReportFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.reportData;
        super.onUiComponentInit(contextData);
    }
}
