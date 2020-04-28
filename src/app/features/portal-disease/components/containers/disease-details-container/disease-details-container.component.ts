import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalDiseaseModuleState } from '../../../store/portal-disease-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { DiseaseDetailsContainerController } from './disease-details-container.controller';

@Component({
    selector: 'disease-details-container',
    templateUrl: './disease-details-container.component.html',
    styleUrls: ['./disease-details-container.scss']
})
export class DiseaseDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalDiseaseModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, DiseaseDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.diseaseData
        super.onUiComponentInit(this.contextData);
    }

}
