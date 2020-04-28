import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalPostModuleState } from "../../../store/portal-post-module.state";
import { PostFormContainerController } from "./post-form-container.controller";

@Component({
    selector: 'post-form-container',
    templateUrl: './post-form-container.component.html',
    styleUrls: ['./post-form-container.scss']
})
export class PostFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalPostModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, PostFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.postData;
        super.onUiComponentInit(contextData);
    }
}
