import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData, AbstractData } from 'helion-core';
import { EntityData } from 'helion-ui-forms';
import { 
	DataFormWidget, FormWidgetComponentController, 
	UiComponentUtils, DataFormController, UiContextData 
} from 'helion-ui-components';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { CartData } from '../../../../../data/cart/cart.data';
import { InvoiceFormWidgetController } from './invoice-form-widget.controller';
import { AcademicOrderWizardData } from '../../../../../data/wizards/academic-order-wizard.data';
import { PortalAssignmentModuleState, getAowCartDataSelector, getAcademicOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
@Component({
  selector: 'app-invoice-form-widget',
  templateUrl: './invoice-form-widget.component.html',
  styleUrls: ['./invoice-form-widget.component.scss']
})
export class InvoiceFormWidgetComponent extends DataFormWidget {

	@Input()
	initData: ArtifactData = new ArtifactData();

	@Input()
	public entityData: EntityData;

	uiController: FormWidgetComponentController;

	constructor(private store: Store<PortalAssignmentModuleState>) {
		super();
		let that = this;
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, InvoiceFormWidgetController);
		// Get the cart and the wizard state
		store.select(getAowCartDataSelector).subscribe((cartData) => { this.uiController['cartData'] = cartData; });
		store.select(getAcademicOrderWizardDataSelector).subscribe(
			(academicOrderWizardData) => { this.uiController['academicOrderWizardData'] = academicOrderWizardData; });
	}
}
