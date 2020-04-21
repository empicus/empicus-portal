import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData, AbstractData } from 'helion-core';
import { EntityData } from 'helion-ui-forms';
import { 
	DataFormWidget, FormWidgetComponentController, 
	UiComponentUtils, UiContextData } from 'helion-ui-components';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { 
	PortalAssignmentModuleState, 
	getCowCartDataSelector,	getContentOrderWizardDataSelector 
} from '../../../../../store/assignment-module.state';
import { ContentDetailsFormWidgetController } from './content-details-form-widget.controller';

@Component({
	selector: 'app-content-details-form-widget',
	templateUrl: './content-details-form-widget.component.html',
	styleUrls: ['./content-details-form-widget.component.scss']
})
export class ContentDetailsFormWidgetComponent extends DataFormWidget {

	@Input()
	initData: ArtifactData;

	@Input()
	public entityData: EntityData;

	writerLevels: ArtifactData[] = [];

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, ContentDetailsFormWidgetController);
		// Get the cart and the wizard state
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
