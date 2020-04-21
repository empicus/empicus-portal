
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { LoginData } from "../../../data/forms/login.data";
import { submitLoginRequestAction } from '../../../store/actions/authentication/authentication.actions';

@FormContainerController({ model: LoginData })
export class  LoginContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		let loginFormData: LoginData = eventData.eventData;
		console.log('Dispatching login event', loginFormData);
		this['uiComponent'].store.dispatch(submitLoginRequestAction({ data: loginFormData }));
	}

}