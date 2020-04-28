import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { DiseaseListContainerController } from './disease-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'disease-list-container',
    templateUrl: './disease-list-container.component.html',
    styleUrls: ['./disease-list-container.scss']
})
export class DiseaseListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, DiseaseListContainerController);
    }
    
}
