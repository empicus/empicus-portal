import { FormContainerController } from "helion-ui-components";
import { ContentInfoFormData } from '../../../../../data/forms/content/content-info.data';
import * as assignmentConstants from '../../../../../util/client-order.constants';
import * as assignmentFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormContainerController({
	model: ContentInfoFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: assignmentFunctions.transitionToContentDetailsForm
	}],
    widgetEventHandlers: [{ 
			eventType: assignmentConstants.TRANSITION_TO_CONTENT_INFO_STATE, 
			handler: { functionName: 'transitionToInfoForm', func: assignmentFunctions.transitionToContentInfoForm }
		}
	]
})
export class  ContentInfoFormContainerController { }