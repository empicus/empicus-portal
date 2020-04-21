import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalAcademicModuleState } from '../../../store/portal-academic-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { AcademicOrderDetailsContainerController } from './academic-order-details-container.controller';

@Component({
    selector: 'academic-order-details-container',
    templateUrl: './academic-order-details-container.component.html',
    styleUrls: ['./academic-order-details-container.scss']
})
export class AcademicOrderDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalAcademicModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, AcademicOrderDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.academicOrderData
        super.onUiComponentInit(this.contextData);
    }

}
