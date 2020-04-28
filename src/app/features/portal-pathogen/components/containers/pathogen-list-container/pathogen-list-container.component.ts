import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { PathogenListContainerController } from './pathogen-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'pathogen-list-container',
    templateUrl: './pathogen-list-container.component.html',
    styleUrls: ['./pathogen-list-container.scss']
})
export class PathogenListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, PathogenListContainerController);
    }
    
}
