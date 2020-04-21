import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
	DataFormWidget, FormWidgetComponentController, 
	UiComponentUtils, UiContextData } from 'helion-ui-components';
import { ArtifactData, AbstractData } from 'helion-core';
import { EntityData } from 'helion-ui-forms';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { PortalAssignmentModuleState, getAcademicOrderWizardDataSelector, getAowCartDataSelector } from '../../../../../store/assignment-module.state';
import { DetailsFormWidgetController } from './details-form-widget.controller';

@Component({
  selector: 'app-academic-details-form-widget',
  templateUrl: './details-form-widget.component.html',
  styleUrls: ['./details-form-widget.component.scss']
})
export class DetailsFormWidgetComponent  extends DataFormWidget {

	@Input()
	public entityData: EntityData;

	@Input()
	initData: ArtifactData = new ArtifactData();

	uiController: FormWidgetComponentController;

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, DetailsFormWidgetController);
		// Get the cart and the wizard state
		store.select(getAowCartDataSelector).subscribe(
			(cartData) => { this.uiController['cartData'] = cartData; });
			
		store.select(getAcademicOrderWizardDataSelector).subscribe(
			(academicOrderWizardData) => { this.uiController['academicOrderWizardData'] = academicOrderWizardData; });
	}

	/**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>){
		super.onUiComponentInit(contextData);
	}

}