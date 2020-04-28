import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalPathogenModuleState } from '../../../store/portal-pathogen-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { PathogenDetailsContainerController } from './pathogen-details-container.controller';

@Component({
    selector: 'pathogen-details-container',
    templateUrl: './pathogen-details-container.component.html',
    styleUrls: ['./pathogen-details-container.scss']
})
export class PathogenDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalPathogenModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, PathogenDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.pathogenData
        super.onUiComponentInit(this.contextData);
    }

}
