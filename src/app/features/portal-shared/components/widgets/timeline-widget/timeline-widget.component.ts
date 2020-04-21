import { Component, Input } from '@angular/core';
import {
	UiComponentUtils, UiContextData, WidgetComponent, WidgetComponentController
} from 'helion-ui-components';
import { AbstractData } from 'helion-core';
import { TimelineWidgetController } from './timeline-widget.controller';
import { ListItem } from '../../../data/list-item/list-item.data';
import { ActivityData } from '../../../data/activity.data';

@Component({
	selector: '.timeline-widget',
	templateUrl: './timeline-widget.component.html',
    styleUrls: ['./timeline-widget.scss']
})
export class TimelineWidgetComponent extends WidgetComponent {

	@Input()
	viewActivityURL = '';

	@Input()
	activities: ActivityData[] = [];

	constructor() {
		super();
		this.uiController = <WidgetComponentController>UiComponentUtils.initController(this, TimelineWidgetController);// Load the shopping cart state
	}
	
    /**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>){
        super.onUiComponentInit(contextData);
	}

}

