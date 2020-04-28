import { DiseaseEditData } from "../../../data/disease-edit/disease-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitDiseaseEditRequestAction, 
	submitDiseaseEditSuccessAction, 
	submitDiseaseEditFailureAction, 
} from "../../../store/actions/disease-edit/disease-edit.actions";

@FormContainerController({ model: DiseaseEditData })
export class  DiseaseEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('DiseaseEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitDiseaseEditRequestAction({ data: eventData.eventData }));
	}

}