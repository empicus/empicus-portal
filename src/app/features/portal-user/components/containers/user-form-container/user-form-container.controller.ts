import { UserFormData } from "../../../data/user-form/user-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitUserFormRequestAction, 
	submitUserFormSuccessAction, 
	submitUserFormFailureAction, 
} from "../../../store/actions/user-form/user-form.actions";

@FormContainerController({ model: UserFormData })
export class  UserFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('UserFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitUserFormRequestAction({ data: eventData.eventData }));
	}

}