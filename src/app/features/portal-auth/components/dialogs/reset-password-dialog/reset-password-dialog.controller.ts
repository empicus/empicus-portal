
import { ArtifactData } from 'helion-core';
import { DialogContainerController } from "helion-ui-components";
import { LoginData } from "../../../data/forms/login.data";
import * as fromAuthConstants from "../../../util/auth.constants";
import * as fromAuthFunctions from "../../../functions/auth.functions";

@DialogContainerController({ 
	model: LoginData,
    widgetEventHandlers: [{ 
			eventType: fromAuthConstants.TRANSITION_TO_SIGNUP_VIEW, 
			handler: { functionName: 'transitionToSignupView', func: fromAuthFunctions.transitionToSignupView }
		},{ 
			eventType: fromAuthConstants.TRANSITION_TO_LOGIN_VIEW, 
			handler: { functionName: 'transitionToLoginView', func: fromAuthFunctions.transitionToLoginView }
		}
	] 
})
export class  ResetPasswordDialogController {
	initData: ArtifactData;
	dialogCssId = fromAuthConstants.AUTH_MODAL_ID_SELECTOR;
}