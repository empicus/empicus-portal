import { ProjectEditData } from "../../../data/project-edit/project-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitProjectEditRequestAction, 
	submitProjectEditSuccessAction, 
	submitProjectEditFailureAction, 
} from "../../../store/actions/project-edit/project-edit.actions";

@FormContainerController({ model: ProjectEditData })
export class  ProjectEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ProjectEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitProjectEditRequestAction({ data: eventData.eventData }));
	}

}