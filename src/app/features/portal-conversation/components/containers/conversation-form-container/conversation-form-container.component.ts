import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalConversationModuleState } from "../../../store/portal-conversation-module.state";
import { ConversationFormContainerController } from "./conversation-form-container.controller";

@Component({
    selector: 'conversation-form-container',
    templateUrl: './conversation-form-container.component.html',
    styleUrls: ['./conversation-form-container.scss']
})
export class ConversationFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalConversationModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ConversationFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.conversationData;
        super.onUiComponentInit(contextData);
    }
}
