import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalDiseaseContactModuleState } from '../../../store/portal-disease-contact-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { DiseaseContactDetailsContainerController } from './disease-contact-details-container.controller';

@Component({
    selector: 'disease-contact-details-container',
    templateUrl: './disease-contact-details-container.component.html',
    styleUrls: ['./disease-contact-details-container.scss']
})
export class DiseaseContactDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalDiseaseContactModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, DiseaseContactDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.diseaseContactData
        super.onUiComponentInit(this.contextData);
    }

}
