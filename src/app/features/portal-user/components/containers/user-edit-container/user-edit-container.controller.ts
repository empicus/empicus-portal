import { UserEditData } from "../../../data/user-edit/user-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitUserEditRequestAction, 
	submitUserEditSuccessAction, 
	submitUserEditFailureAction, 
} from "../../../store/actions/user-edit/user-edit.actions";

@FormContainerController({ model: UserEditData })
export class  UserEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('UserEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitUserEditRequestAction({ data: eventData.eventData }));
	}

}