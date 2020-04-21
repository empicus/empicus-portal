import { AcademicOrderEditData } from "../../../data/academic-order-edit/academic-order-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitAcademicOrderEditRequestAction, 
	submitAcademicOrderEditSuccessAction, 
	submitAcademicOrderEditFailureAction, 
} from "../../../store/actions/academic-order-edit/academic-order-edit.actions";

@FormContainerController({ model: AcademicOrderEditData })
export class  AcademicOrderEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('AcademicOrderEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitAcademicOrderEditRequestAction({ data: eventData.eventData }));
	}

}