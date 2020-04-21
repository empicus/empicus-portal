import { ResetPasswordData } from "../../../data/forms/reset-password.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { submitResetPasswordRequestAction } from '../../../store/actions/authentication/authentication.actions';

@FormContainerController({ model: ResetPasswordData })
export class  ResetPasswordContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		this['uiComponent'].store.dispatch(submitResetPasswordRequestAction({ data: eventData.eventData }));
	}

}