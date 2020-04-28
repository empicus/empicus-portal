import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { DataService } from 'helion-core-http';
import { PortalConversationModuleState } from '../../../store/portal-conversation-module.state';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { ConversationDetailsContainerController } from './conversation-details-container.controller';

@Component({
    selector: 'conversation-details-container',
    templateUrl: './conversation-details-container.component.html',
    styleUrls: ['./conversation-details-container.scss']
})
export class ConversationDetailsContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalConversationModuleState>,
        private route: ActivatedRoute, private dataService: DataService) {
        super(store);
        this.uiController = UiComponentUtils.initController(this, ConversationDetailsContainerController);
    }

    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData.data = routeData.conversationData
        super.onUiComponentInit(this.contextData);
    }

}
