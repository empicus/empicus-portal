
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
			eventType: fromAuthConstants.TRANSITION_TO_RESET_PASSWORD_VIEW, 
			handler: { functionName: 'transitionToResetPasswordView', func: fromAuthFunctions.transitionToResetPasswordView }
		}
	],
	functions: [{
		functionName: 'onSubmitSuccess',
		func: fromAuthFunctions.onLoginFormSuccess
	}]
})
export class  LoginDialogController {
	initData: ArtifactData;
	dialogCssId = fromAuthConstants.AUTH_MODAL_ID_SELECTOR;
}