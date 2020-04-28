import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalProjectModuleState } from "../../../store/portal-project-module.state";
import { ProjectEditContainerController } from "./project-edit-container.controller";

@Component({
    selector: 'project-edit-container',
    templateUrl: './project-edit-container.component.html',
    styleUrls: ['./project-edit-container.scss']
})
export class ProjectEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalProjectModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ProjectEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the ProjectEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
