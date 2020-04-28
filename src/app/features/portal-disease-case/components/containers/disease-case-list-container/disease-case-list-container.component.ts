import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { DiseaseCaseListContainerController } from './disease-case-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'disease-case-list-container',
    templateUrl: './disease-case-list-container.component.html',
    styleUrls: ['./disease-case-list-container.scss']
})
export class DiseaseCaseListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, DiseaseCaseListContainerController);
    }
    
}
