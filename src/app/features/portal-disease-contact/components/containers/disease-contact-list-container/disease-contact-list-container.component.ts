import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { DiseaseContactListContainerController } from './disease-contact-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'disease-contact-list-container',
    templateUrl: './disease-contact-list-container.component.html',
    styleUrls: ['./disease-contact-list-container.scss']
})
export class DiseaseContactListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, DiseaseContactListContainerController);
    }
    
}
