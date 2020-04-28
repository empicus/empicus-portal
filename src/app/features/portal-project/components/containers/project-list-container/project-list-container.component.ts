import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { ProjectListContainerController } from './project-list-container.controller';
import { UiModuleState } from 'helion-ui';

@Component({
    selector: 'project-list-container',
    templateUrl: './project-list-container.component.html',
    styleUrls: ['./project-list-container.scss']
})
export class ProjectListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, ProjectListContainerController);
    }
    
}
