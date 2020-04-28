import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { ConversationListContainerController } from './conversation-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'conversation-list-container',
    templateUrl: './conversation-list-container.component.html',
    styleUrls: ['./conversation-list-container.scss']
})
export class ConversationListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, ConversationListContainerController);
    }
    
}
