import { SignupData } from "../../../data/forms/signup.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { submitSignupRequestAction } from '../../../store/actions/authentication/authentication.actions';

@FormContainerController({ model: SignupData })
export class  SignupContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		this['uiComponent'].store.dispatch(submitSignupRequestAction({ data: eventData.eventData }));
	}

}