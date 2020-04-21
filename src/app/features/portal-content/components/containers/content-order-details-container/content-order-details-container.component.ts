import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalContentModuleState } from '../../../store/portal-content-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { ContentOrderDetailsContainerController } from './content-order-details-container.controller';

@Component({
    selector: 'content-order-details-container',
    templateUrl: './content-order-details-container.component.html',
    styleUrls: ['./content-order-details-container.scss']
})
export class ContentOrderDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalContentModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, ContentOrderDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.contentOrderData
        super.onUiComponentInit(this.contextData);
    }

}
