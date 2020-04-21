
import { ArtifactData } from 'helion-core';
import { DialogContainerController } from "helion-ui-components";
import * as fromAuthConstants from "../../../util/auth.constants";
import * as fromAuthFunctions from "../../../functions/auth.functions";
import { SignupData } from '../../../data/forms/signup.data';

@DialogContainerController({ 
	model: SignupData,
    widgetEventHandlers: [{ 
			eventType: fromAuthConstants.TRANSITION_TO_LOGIN_VIEW, 
			handler: { functionName: 'transitionToLoginView', func: fromAuthFunctions.transitionToLoginView }
		},{ 
			eventType: fromAuthConstants.TRANSITION_TO_RESET_PASSWORD_VIEW, 
			handler: { functionName: 'transitionToResetPasswordView', func: fromAuthFunctions.transitionToResetPasswordView }
		}
	],
	functions: [{
		functionName: 'onSubmitSuccess',
		func: fromAuthFunctions.onSignupFormSuccess
	}] 
})
export class  SignupDialogController {
	initData: ArtifactData;
	dialogCssId = fromAuthConstants.AUTH_MODAL_ID_SELECTOR;
}