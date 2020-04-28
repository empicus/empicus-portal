import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalTopicModuleState } from '../../../store/portal-topic-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { TopicDetailsContainerController } from './topic-details-container.controller';

@Component({
    selector: 'topic-details-container',
    templateUrl: './topic-details-container.component.html',
    styleUrls: ['./topic-details-container.scss']
})
export class TopicDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalTopicModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, TopicDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.topicData
        super.onUiComponentInit(this.contextData);
    }

}
