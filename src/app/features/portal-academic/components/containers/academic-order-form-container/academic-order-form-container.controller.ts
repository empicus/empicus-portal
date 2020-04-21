import { AcademicOrderFormData } from "../../../data/academic-order-form/academic-order-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitAcademicOrderFormRequestAction, 
	submitAcademicOrderFormSuccessAction, 
	submitAcademicOrderFormFailureAction, 
} from "../../../store/actions/academic-order-form/academic-order-form.actions";

@FormContainerController({ model: AcademicOrderFormData })
export class  AcademicOrderFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('AcademicOrderFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitAcademicOrderFormRequestAction({ data: eventData.eventData }));
	}

}