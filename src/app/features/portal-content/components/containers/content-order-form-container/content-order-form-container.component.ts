import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalContentModuleState } from "../../../store/portal-content-module.state";
import { ContentOrderFormContainerController } from "./content-order-form-container.controller";

@Component({
    selector: 'content-order-form-container',
    templateUrl: './content-order-form-container.component.html',
    styleUrls: ['./content-order-form-container.scss']
})
export class ContentOrderFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalContentModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentOrderFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.contentOrderData;
        super.onUiComponentInit(contextData);
    }
}
