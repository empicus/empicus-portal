import { PathogenEditData } from "../../../data/pathogen-edit/pathogen-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitPathogenEditRequestAction, 
	submitPathogenEditSuccessAction, 
	submitPathogenEditFailureAction, 
} from "../../../store/actions/pathogen-edit/pathogen-edit.actions";

@FormContainerController({ model: PathogenEditData })
export class  PathogenEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('PathogenEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitPathogenEditRequestAction({ data: eventData.eventData }));
	}

}