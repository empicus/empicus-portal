import { DiseaseCaseFormData } from "../../../data/disease-case-form/disease-case-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitDiseaseCaseFormRequestAction, 
	submitDiseaseCaseFormSuccessAction, 
	submitDiseaseCaseFormFailureAction, 
} from "../../../store/actions/disease-case-form/disease-case-form.actions";

@FormContainerController({ model: DiseaseCaseFormData })
export class  DiseaseCaseFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('DiseaseCaseFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitDiseaseCaseFormRequestAction({ data: eventData.eventData }));
	}

}