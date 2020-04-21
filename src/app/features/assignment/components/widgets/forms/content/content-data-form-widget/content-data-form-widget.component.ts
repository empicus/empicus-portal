import { Component, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
	DataFormWidget, FormWidgetComponentController, 
	UiComponentUtils, UiContextData } from 'helion-ui-components';
import { EntityData } from 'helion-ui-forms';
import { ArtifactData, AbstractData } from 'helion-core';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { 
	PortalAssignmentModuleState, getCowCartDataSelector, 
	getContentOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { ContentDataFormWidgetController } from './content-data-form-widget.controller';

@Component({
  selector: 'app-content-data-form-widget',
  templateUrl: './content-data-form-widget.component.html',
  styleUrls: ['./content-data-form-widget.component.scss']
})
export class ContentDataFormWidgetComponent  extends DataFormWidget {

	@Input()
	initData: ArtifactData;

	@Input()
	public entityData: EntityData;
	
	/** File Upload Related Variables */
	dataURLs: any[] = [];
	inputText = "Upload a file";

	@ViewChild('documentInput', { static: false }) inputFile;
	@ViewChild('documentIconContainer', { static: false }) iconContainer;

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, ContentDataFormWidgetController);
		// Get the cart and the wizard state
		store.select(getCowCartDataSelector).subscribe(
			(cartData) => { this.uiController['cartData'] = cartData; });
			
		store.select(getContentOrderWizardDataSelector).subscribe(
			(contentOrderWizardData) => { this.uiController['contentOrderWizardData'] = contentOrderWizardData; });
	}

	/**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>){
		super.onUiComponentInit(contextData);
	}



}
