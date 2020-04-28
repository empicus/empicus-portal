import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { TopicListContainerController } from './topic-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'topic-list-container',
    templateUrl: './topic-list-container.component.html',
    styleUrls: ['./topic-list-container.scss']
})
export class TopicListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, TopicListContainerController);
    }
    
}
