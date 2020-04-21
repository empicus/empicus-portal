import { FormContainerController } from "helion-ui-components";
import { CartData } from '../../../../../data/cart/cart.data';
import { ContentOrderWizardData } from '../../../../../data/wizards/content-order-wizard.data';
import { ContentInvoiceFormData } from '../../../../../data/forms/content/content-invoice.data';
import * as serviceOrderConstants from '../../../../..//util/client-order.constants';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormContainerController({ 
	model: ContentInvoiceFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: serviceOrderFunctions.submitContentOrder
	}],
    widgetEventHandlers: [{ 
			eventType: serviceOrderConstants.TRANSITION_TO_DATA_STATE, 
			handler: { functionName: 'transitionToDataForm', func: serviceOrderFunctions.transitionToDataForm }
		}
	] 
})
export class  ContentInvoiceFormContainerController {

	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
    contentOrderWizardData = new ContentOrderWizardData();

}