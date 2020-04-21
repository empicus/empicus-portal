import { Component } from '@angular/core';
import { 
    ContainerComponent, 
    ContainerComponentController, UiComponentUtils, UiContextData 
} from 'helion-ui-components';
import { Store } from '@ngrx/store';
import { AcademicOrderListContainerController } from './academic-order-list-container.controller';
import { UiModuleState } from 'helion-ui';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'academic-order-list-container',
    templateUrl: './academic-order-list-container.component.html',
    styleUrls: ['./academic-order-list-container.scss']
})
export class AcademicOrderListContainerComponent extends ContainerComponent {


    uiController: ContainerComponentController;

    constructor(public store: Store<UiModuleState>, private route: ActivatedRoute) {
        super(store);
        this.uiController = <ContainerComponentController> UiComponentUtils.initController(this, AcademicOrderListContainerController);
    }


    /**
     * This method does the actual UIComponent initialization
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        let routeData = this.route.snapshot.data;
        contextData['activities'] = routeData.academicOrderList;
        super.onUiComponentInit(this.contextData);
    }

    
}
