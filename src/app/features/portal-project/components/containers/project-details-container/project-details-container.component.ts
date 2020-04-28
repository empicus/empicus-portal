import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalProjectModuleState } from '../../../store/portal-project-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { ProjectDetailsContainerController } from './project-details-container.controller';

@Component({
    selector: 'project-details-container',
    templateUrl: './project-details-container.component.html',
    styleUrls: ['./project-details-container.scss']
})
export class ProjectDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalProjectModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, ProjectDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.projectData
        super.onUiComponentInit(this.contextData);
    }

}
