import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { UserListContainerController } from './user-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'user-list-container',
    templateUrl: './user-list-container.component.html',
    styleUrls: ['./user-list-container.scss']
})
export class UserListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, UserListContainerController);
    }
    
}
