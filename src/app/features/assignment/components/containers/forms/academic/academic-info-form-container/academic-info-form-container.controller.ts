import { FormContainerController } from "helion-ui-components";
import { AcademicInfoFormData } from '../../../../../data/forms/academic/academic-info.data';
import * as assignmentFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormContainerController({
	model: AcademicInfoFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: assignmentFunctions.transitionToDetailsForm
	}],
    /* widgetEventHandlers: [{ 
			eventType: assignmentConstants.TRANSITION_TO_INFO_STATE, 
			handler: { functionName: 'transitionToInfoForm', func: assignmentFunctions.transitionToInfoForm }
		}
	] */
})
export class  AcademicInfoFormContainerController {

}