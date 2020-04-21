import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData, AbstractData } from 'helion-core';
import { EntityData } from 'helion-ui-forms';
import { 
	DataFormWidget, FormWidgetComponentController, 
	UiComponentUtils, DataFormController, UiContextData } from 'helion-ui-components';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { PortalAssignmentModuleState, getCowCartDataSelector, getContentOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { ContentInvoiceFormWidgetController } from './content-invoice-form-widget.controller';

@Component({
  selector: 'app-content-invoice-form-widget',
  templateUrl: './content-invoice-form-widget.component.html',
  styleUrls: ['./content-invoice-form-widget.component.scss']
})
export class ContentInvoiceFormWidgetComponent extends DataFormWidget {

	@Input()
	public entityData: EntityData;

	@Input()
	initData: ArtifactData = new ArtifactData();

	uiController: FormWidgetComponentController;

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, ContentInvoiceFormWidgetController);
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