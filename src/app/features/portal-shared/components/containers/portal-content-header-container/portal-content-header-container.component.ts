import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalModuleState } from '../../../store/portal-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { PortalContentHeaderContainerController } from './portal-content-header-container.controller';

@Component({
    selector: 'portal-content-header-container',
    templateUrl: './portal-content-header-container.component.html',
    styleUrls: ['./portal-content-header-container.scss']
})
export class PortalContentHeaderContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, PortalContentHeaderContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.caseData
        contextData.uiContextMap['dataService'] = this.dataService;
        super.onUiComponentInit(this.contextData);
    }

}
