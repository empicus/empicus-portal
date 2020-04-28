import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { ReportListContainerController } from './report-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'report-list-container',
    templateUrl: './report-list-container.component.html',
    styleUrls: ['./report-list-container.scss']
})
export class ReportListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, ReportListContainerController);
    }
    
}
