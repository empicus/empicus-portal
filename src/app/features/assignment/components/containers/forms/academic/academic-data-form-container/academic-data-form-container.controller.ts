import { FormContainerController } from "helion-ui-components";
import { AcademicDataFormData } from '../../../../../data/forms/academic/academic-data.data';
import * as assignmentConstants from '../../../../..//util/client-order.constants';
import * as assignmentFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormContainerController({
	model: AcademicDataFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: assignmentFunctions.transitionToInvoiceForm
	}],
    widgetEventHandlers: [{ 
			eventType: assignmentConstants.TRANSITION_TO_DETAILS_STATE, 
			handler: { functionName: 'transitionToDetailForm', func: assignmentFunctions.transitionToDetailsForm }
		},{ 
			eventType: assignmentConstants.TRANSITION_TO_INVOICE_STATE, 
			handler: { functionName: 'transitionToInvoiceForm', func: assignmentFunctions.transitionToInvoiceForm }
		}
	]
})
export class  AcademicDataFormContainerController {
}