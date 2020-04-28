import { DiseaseFormData } from "../../../data/disease-form/disease-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitDiseaseFormRequestAction, 
	submitDiseaseFormSuccessAction, 
	submitDiseaseFormFailureAction, 
} from "../../../store/actions/disease-form/disease-form.actions";

@FormContainerController({ model: DiseaseFormData })
export class  DiseaseFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('DiseaseFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitDiseaseFormRequestAction({ data: eventData.eventData }));
	}

}