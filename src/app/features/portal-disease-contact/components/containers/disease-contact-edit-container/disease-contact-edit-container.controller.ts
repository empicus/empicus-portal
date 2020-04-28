import { DiseaseContactEditData } from "../../../data/disease-contact-edit/disease-contact-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitDiseaseContactEditRequestAction, 
	submitDiseaseContactEditSuccessAction, 
	submitDiseaseContactEditFailureAction, 
} from "../../../store/actions/disease-contact-edit/disease-contact-edit.actions";

@FormContainerController({ model: DiseaseContactEditData })
export class  DiseaseContactEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('DiseaseContactEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitDiseaseContactEditRequestAction({ data: eventData.eventData }));
	}

}