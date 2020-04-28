import { DiseaseContactFormData } from "../../../data/disease-contact-form/disease-contact-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitDiseaseContactFormRequestAction, 
	submitDiseaseContactFormSuccessAction, 
	submitDiseaseContactFormFailureAction, 
} from "../../../store/actions/disease-contact-form/disease-contact-form.actions";

@FormContainerController({ model: DiseaseContactFormData })
export class  DiseaseContactFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('DiseaseContactFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitDiseaseContactFormRequestAction({ data: eventData.eventData }));
	}

}