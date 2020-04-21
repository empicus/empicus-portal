import { FormContainerController } from "helion-ui-components";
import { ContentDetailsFormData } from '../../../../../data/forms/content/content-details.data';
import * as assignmentConstants from '../../../../../util/client-order.constants';
import * as assignmentFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormContainerController({
	model: ContentDetailsFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: assignmentFunctions.transitionToContentDataForm
	}],
    widgetEventHandlers: [{ 
			eventType: assignmentConstants.TRANSITION_TO_INFO_STATE, 
			handler: { functionName: 'transitionToInfoForm', func: assignmentFunctions.transitionToContentInfoForm }
		}
	]
})
export class  ContentDetailsFormContainerController {}