import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalProjectModuleState } from "../../../store/portal-project-module.state";
import { ProjectFormContainerController } from "./project-form-container.controller";

@Component({
    selector: 'project-form-container',
    templateUrl: './project-form-container.component.html',
    styleUrls: ['./project-form-container.scss']
})
export class ProjectFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalProjectModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ProjectFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.projectData;
        super.onUiComponentInit(contextData);
    }
}
