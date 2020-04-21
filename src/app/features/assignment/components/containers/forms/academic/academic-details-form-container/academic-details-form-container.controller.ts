import { FormContainerController } from "helion-ui-components";
import * as serviceOrderConstants from '../../../../..//util/client-order.constants';
import { AcademicDetailsFormData } from '../../../../../data/forms/academic/academic-details.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormContainerController({
	model: AcademicDetailsFormData,
	functions: [{
		functionName: 'onSubmitSuccess',
		func: serviceOrderFunctions.transitionToDataForm
	}],
    widgetEventHandlers: [{ 
			eventType: serviceOrderConstants.TRANSITION_TO_INFO_STATE, 
			handler: { functionName: 'transitionToInfoForm', func: serviceOrderFunctions.transitionToInfoForm }
		}
	]
})
export class  AcademicDetailsFormContainerController {

}