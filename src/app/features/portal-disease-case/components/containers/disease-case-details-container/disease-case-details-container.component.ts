import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalDiseaseCaseModuleState } from '../../../store/portal-disease-case-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { DiseaseCaseDetailsContainerController } from './disease-case-details-container.controller';

@Component({
    selector: 'disease-case-details-container',
    templateUrl: './disease-case-details-container.component.html',
    styleUrls: ['./disease-case-details-container.scss']
})
export class DiseaseCaseDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalDiseaseCaseModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, DiseaseCaseDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.diseaseCaseData
        super.onUiComponentInit(this.contextData);
    }

}
