import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { PostListContainerController } from './post-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'post-list-container',
    templateUrl: './post-list-container.component.html',
    styleUrls: ['./post-list-container.scss']
})
export class PostListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, PostListContainerController);
    }
    
}
