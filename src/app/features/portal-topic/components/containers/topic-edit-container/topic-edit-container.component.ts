import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalTopicModuleState } from "../../../store/portal-topic-module.state";
import { TopicEditContainerController } from "./topic-edit-container.controller";

@Component({
    selector: 'topic-edit-container',
    templateUrl: './topic-edit-container.component.html',
    styleUrls: ['./topic-edit-container.scss']
})
export class TopicEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalTopicModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, TopicEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the TopicEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
