import { FormContainerController } from "helion-ui-components";
import * as assignmentConstants from '../../../../../util/client-order.constants';
import * as assignmentFunctions from '../../../../../functions/controllers/details-form-widget.functions';
import { ContentDataFormData } from '../../../../../data/forms/content/content-data.data';

@FormContainerController({
	model: ContentDataFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: assignmentFunctions.transitionToContentInvoiceForm
	}],
    widgetEventHandlers: [{ 
			eventType: assignmentConstants.TRANSITION_TO_CONTENT_DETAILS_STATE, 
			handler: { functionName: 'transitionToDetailsForm', func: assignmentFunctions.transitionToContentDetailsForm }
		},{ 
			eventType: assignmentConstants.TRANSITION_TO_CONTENT_INVOICE_STATE, 
			handler: { functionName: 'transitionToContentInvoiceForm', func: assignmentFunctions.transitionToContentInvoiceForm }
		}
	]
})
export class  ContentDataFormContainerController {}