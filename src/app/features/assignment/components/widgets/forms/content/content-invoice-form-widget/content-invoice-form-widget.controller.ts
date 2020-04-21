import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import { CartData } from '../../../../../data/cart/cart.data';
import { ContentOrderWizardData } from '../../../../../data/wizards/content-order-wizard.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormWidgetController({
    model: EntityData,
	hasRecaptcha: false,
	functions:[
		{ functionName: 'transitionTo', func: serviceOrderFunctions.transitionTo },
	]
})
export class ContentInvoiceFormWidgetController {
    
	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
	contentOrderWizardData = new ContentOrderWizardData();

}