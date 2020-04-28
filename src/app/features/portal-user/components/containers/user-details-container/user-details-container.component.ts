import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalUserModuleState } from '../../../store/portal-user-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { UserDetailsContainerController } from './user-details-container.controller';

@Component({
    selector: 'user-details-container',
    templateUrl: './user-details-container.component.html',
    styleUrls: ['./user-details-container.scss']
})
export class UserDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalUserModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, UserDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.userData
        super.onUiComponentInit(this.contextData);
    }

}
