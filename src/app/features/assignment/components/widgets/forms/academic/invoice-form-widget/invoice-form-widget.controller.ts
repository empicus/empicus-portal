import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import { CartData } from '../../../../../data/cart/cart.data';
import { AcademicOrderWizardData } from '../../../../../data/wizards/academic-order-wizard.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';


@FormWidgetController({ 
	model: EntityData, 
	hasRecaptcha: false,
	functions:[
		{ functionName: 'transitionTo', func: serviceOrderFunctions.transitionTo },
	]
})
export class InvoiceFormWidgetController { 

	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
    academicOrderWizardData = new AcademicOrderWizardData();

}