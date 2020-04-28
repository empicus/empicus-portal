import { DiseaseCaseEditData } from "../../../data/disease-case-edit/disease-case-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitDiseaseCaseEditRequestAction, 
	submitDiseaseCaseEditSuccessAction, 
	submitDiseaseCaseEditFailureAction, 
} from "../../../store/actions/disease-case-edit/disease-case-edit.actions";

@FormContainerController({ model: DiseaseCaseEditData })
export class  DiseaseCaseEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('DiseaseCaseEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitDiseaseCaseEditRequestAction({ data: eventData.eventData }));
	}

}