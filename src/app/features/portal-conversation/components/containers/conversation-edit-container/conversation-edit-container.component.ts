import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalConversationModuleState } from "../../../store/portal-conversation-module.state";
import { ConversationEditContainerController } from "./conversation-edit-container.controller";

@Component({
    selector: 'conversation-edit-container',
    templateUrl: './conversation-edit-container.component.html',
    styleUrls: ['./conversation-edit-container.scss']
})
export class ConversationEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalConversationModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ConversationEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the ConversationEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
