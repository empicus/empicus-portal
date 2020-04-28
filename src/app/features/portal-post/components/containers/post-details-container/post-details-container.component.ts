import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalPostModuleState } from '../../../store/portal-post-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { PostDetailsContainerController } from './post-details-container.controller';

@Component({
    selector: 'post-details-container',
    templateUrl: './post-details-container.component.html',
    styleUrls: ['./post-details-container.scss']
})
export class PostDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalPostModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, PostDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.postData
        super.onUiComponentInit(this.contextData);
    }

}
