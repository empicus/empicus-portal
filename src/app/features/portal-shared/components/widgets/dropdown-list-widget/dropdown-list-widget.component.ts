import { Component, Input } from '@angular/core';
import {
	UiComponentUtils, UiContextData, WidgetComponent, WidgetComponentController
} from 'helion-ui-components';
import { AbstractData, ArtifactData } from 'helion-core';
import { DropDownListWidgetController } from './dropdown-list-widget.controller'

@Component({
	selector: 'dropdown-list-widget',
	templateUrl: './dropdown-list-widget.component.html',
    styleUrls: ['./dropdown-list-widget.scss']
})
export class DropDownListWidgetComponent extends WidgetComponent {

	@Input()
	showList: boolean = false;

	selectedText  = '';
	showSelectedText: boolean = false;

	@Input()
	items: ArtifactData[] = [];

	constructor() {
		super();
		this.uiController = <WidgetComponentController>UiComponentUtils.initController(this, DropDownListWidgetController);// Load the shopping cart state
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
	selected(item: ArtifactData) {
		this.showList = false;
		this.showSelectedText = true;
		this.selectedText = item.fieldData['name'].value;
		this.emit({
			eventData: item,
			eventType: ''
		})
	} 
}

