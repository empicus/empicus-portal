import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { 
    FormContainerComponent, 
    FormContainerComponentController, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalPostModuleState } from "../../../store/portal-post-module.state";
import { PostEditContainerController } from "./post-edit-container.controller";

@Component({
    selector: 'post-edit-container',
    templateUrl: './post-edit-container.component.html',
    styleUrls: ['./post-edit-container.scss']
})
export class PostEditContainerComponent extends FormContainerComponent {

    constructor(store: Store<PortalPostModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, PostEditContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        console.log('This is the PostEditContainer form container controller:::::', this.uiController)
        super.onUiComponentInit(contextData);
    }
}
