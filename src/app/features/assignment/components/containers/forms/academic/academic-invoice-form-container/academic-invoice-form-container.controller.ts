import { CartData } from '../../../../../data/cart/cart.data';
import { FormContainerController } from "helion-ui-components";
import { AcademicInvoiceFormData } from '../../../../../data/forms/academic/academic-invoice.data';
import * as serviceOrderConstants from '../../../../..//util/client-order.constants';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';
import { AcademicOrderWizardData } from '../../../../../data/wizards/academic-order-wizard.data';

@FormContainerController({ 
	model: AcademicInvoiceFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: serviceOrderFunctions.submitAcademicOrder
	}],
    widgetEventHandlers: [{ 
			eventType: serviceOrderConstants.TRANSITION_TO_DATA_STATE, 
			handler: { functionName: 'transitionToDataForm', func: serviceOrderFunctions.transitionToDataForm }
		}
	] 
})
export class  AcademicInvoiceFormContainerController {

	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
    academicOrderWizardData = new AcademicOrderWizardData();

}