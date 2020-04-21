import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
	DataFormWidget, 
	FormWidgetComponentController, UiComponentUtils, UiContextData,
} from 'helion-ui-components';
import { ArtifactData, AbstractData } from 'helion-core';
import { EntityData } from 'helion-ui-forms';
import { 
	PortalAssignmentModuleState, getAowCartDataSelector, getAcademicOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { InfoFormWidgetController } from './info-form-widget.controller';
import { UiNotificationModuleState } from 'helion-ui-notifications';

@Component({
  selector: 'app-academic-info-form-widget',
  templateUrl: './info-form-widget.component.html',
  styleUrls: ['./info-form-widget.component.scss']
})
export class InfoFormWidgetComponent  extends DataFormWidget {

	@Input()
	public entityData: EntityData;

	@Input()
	initData: ArtifactData = new ArtifactData();

	uiController: FormWidgetComponentController;

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, InfoFormWidgetController);
		// Get the cart and the wizard state
		store.select(getAowCartDataSelector).subscribe((cartData) => { this.uiController['cartData'] = cartData; });
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