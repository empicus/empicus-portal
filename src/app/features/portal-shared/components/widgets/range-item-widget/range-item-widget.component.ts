import { Component, Input } from '@angular/core';
import {
	UiComponentUtils, UiContextData, WidgetComponent, WidgetComponentController
} from 'helion-ui-components';
import { AbstractData } from 'helion-core';
import { RangeItemWidgetController } from './range-item-widget.controller'
import { RangeItem } from '../../../data/range-item/range-item.data';

@Component({
	selector: 'range-item-widget',
	templateUrl: './range-item-widget.component.html',
    styleUrls: ['./range-item-widget.scss']
})
export class RangeItemWidgetComponent extends WidgetComponent {

	@Input()
	show: boolean = false;

	@Input()
	items: any[] = []

	showOptions: boolean = false;

	constructor() {
		super();
		this.uiController = <WidgetComponentController>UiComponentUtils.initController(this, RangeItemWidgetController);// Load the shopping cart state
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
	 * @param selectedItem 
	 */
	selectItem(selectedItem: RangeItem) {
		this.items.forEach(function(item) { item.itemActive = false; })
		selectedItem.itemActive = true;
		this.emit({ eventData: selectedItem, eventType: 'CLICK' });
	} 
}

