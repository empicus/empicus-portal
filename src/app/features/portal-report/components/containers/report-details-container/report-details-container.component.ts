import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalReportModuleState } from '../../../store/portal-report-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { ReportDetailsContainerController } from './report-details-container.controller';

@Component({
    selector: 'report-details-container',
    templateUrl: './report-details-container.component.html',
    styleUrls: ['./report-details-container.scss']
})
export class ReportDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalReportModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, ReportDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.reportData
        super.onUiComponentInit(this.contextData);
    }

}
