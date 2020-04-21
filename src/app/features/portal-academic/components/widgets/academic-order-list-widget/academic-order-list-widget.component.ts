import { Component, Input } from '@angular/core';
import { ArtifactData, AbstractData } from 'helion-core';
import { WidgetComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { AcademicOrderListWidgetController } from './academic-order-list-widget.controller';
import { UiModuleState } from 'helion-ui';
import { Store } from '@ngrx/store';

@Component({
    selector: 'academic-order-list-widget',
    templateUrl: './academic-order-list-widget.component.html',
    styleUrls: ['./academic-order-list-widget.scss']
})
export class AcademicOrderListWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    @Input()
    items: ArtifactData[] = [];

    constructor(private store: Store<UiModuleState>) {
        super();
        this.uiController = UiComponentUtils.initController(this, AcademicOrderListWidgetController);
    }
	
    /**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>){
        super.onUiComponentInit(contextData);
	}


}

