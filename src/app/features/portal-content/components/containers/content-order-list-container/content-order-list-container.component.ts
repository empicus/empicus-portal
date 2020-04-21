import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { ContentOrderListContainerController } from './content-order-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'content-order-list-container',
    templateUrl: './content-order-list-container.component.html',
    styleUrls: ['./content-order-list-container.scss']
})
export class ContentOrderListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, ContentOrderListContainerController);
    }
    
}
