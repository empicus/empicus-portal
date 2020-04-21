import { Component, Input } from '@angular/core';
import {
	UiComponentUtils, UiContextData, WidgetComponent, WidgetComponentController
} from 'helion-ui-components';
import { AbstractData } from 'helion-core';
import { SelectableListWidgetController } from './selectable-list-widget.controller';
import { ListItem } from '../../../data/list-item/list-item.data';

@Component({
	selector: 'selectable-list-widget',
	templateUrl: './selectable-list-widget.component.html',
    styleUrls: ['./selectable-list-widget.scss']
})
export class SelectableListWidgetComponent extends WidgetComponent {

	@Input()
	items: ListItem[] = [];

	constructor() {
		super();
		this.uiController = <WidgetComponentController>UiComponentUtils.initController(this, SelectableListWidgetController);// Load the shopping cart state
	}
	
    /**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>){
        super.onUiComponentInit(contextData);
	}

	/**
	 * 
	 * @param val 
	 */
	selectedItem(selectedItem: ListItem) {
		this.items.forEach(function(item) { item.itemActive = false; })
		selectedItem.itemActive = true;
		this.emit({ eventData: selectedItem, eventType: 'CLICK' });
	} 
}

