import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalPathogenModuleState } from "../../../store/portal-pathogen-module.state";
import { PathogenEditContainerController } from "./pathogen-edit-container.controller";

@Component({
    selector: 'pathogen-edit-container',
    templateUrl: './pathogen-edit-container.component.html',
    styleUrls: ['./pathogen-edit-container.scss']
})
export class PathogenEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalPathogenModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, PathogenEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the PathogenEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
