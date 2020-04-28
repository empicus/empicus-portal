import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { PortalTopicModuleState } from "../../../store/portal-topic-module.state";
import { TopicFormContainerController } from "./topic-form-container.controller";

@Component({
    selector: 'topic-form-container',
    templateUrl: './topic-form-container.component.html',
    styleUrls: ['./topic-form-container.scss']
})
export class TopicFormContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, store: Store<PortalTopicModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, TopicFormContainerController);
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.topicData;
        super.onUiComponentInit(contextData);
    }
}
