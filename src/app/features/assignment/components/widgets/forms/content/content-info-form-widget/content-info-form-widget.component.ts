import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityData } from 'helion-ui-forms';
import { ArtifactData, AbstractData } from 'helion-core';
import { ListItem } from '../../../../../../portal-shared/data/list-item/list-item.data';
import { RangeItem } from '../../../../../../portal-shared/data/range-item/range-item.data';
import { 
	FormWidgetComponentController, UiComponentUtils, 
	DataFormWidget, UiContextData 
} from 'helion-ui-components';
import { PortalAssignmentModuleState, getAowCartDataSelector, getAcademicOrderWizardDataSelector, getCowCartDataSelector, getContentOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { ContentOrderWizardData } from '../../../../../data/wizards/content-order-wizard.data';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { ContentInfoFormWidgetController } from './content-info-form-widget.controller';

@Component({
  selector: 'app-content-info-form-widget',
  templateUrl: './content-info-form-widget.component.html',
  styleUrls: ['./content-info-form-widget.component.scss']
})
export class ContentInfoFormWidgetComponent extends DataFormWidget {

	@Input()
	public entityData: EntityData;

	@Input()
	initData: ArtifactData = new ArtifactData();

	uiController: FormWidgetComponentController;

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, ContentInfoFormWidgetController);
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
