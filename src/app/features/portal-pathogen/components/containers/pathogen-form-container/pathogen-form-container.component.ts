import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalPathogenModuleState } from "../../../store/portal-pathogen-module.state";
import { PathogenFormContainerController } from "./pathogen-form-container.controller";

@Component({
    selector: 'pathogen-form-container',
    templateUrl: './pathogen-form-container.component.html',
    styleUrls: ['./pathogen-form-container.scss']
})
export class PathogenFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalPathogenModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, PathogenFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.pathogenData;
        super.onUiComponentInit(contextData);
    }
}
