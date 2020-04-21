import { openUiDialogAction } from 'helion-ui-notifications';
import { LoginData } from '../data/forms/login.data';
import { submitLoginRequestAction, submitSignupRequestAction } from '../store/actions/authentication/authentication.actions';
import { SignupData } from '../data/forms/signup.data';

/**
 * 
 */
export const transitionToLoginView = function() {
    this.uiComponent['uiNotificationStore'].dispatch(openUiDialogAction({
        data: { uiComponentName: 'loginDialog' }
    }));
}

/**
 * 
 */
export const transitionToSignupView = function() {
    console.log('Transitioning to Signup View ' );
    this.uiComponent['uiNotificationStore'].dispatch(openUiDialogAction({
        data: { uiComponentName: 'signupDialog' }
    }));
}

/**
 * 
 */
export const transitionToResetPasswordView = function() {
    this.uiComponent['uiNotificationStore'].dispatch(openUiDialogAction({
        data: { uiComponentName: 'resetPasswordDialog' }
    }));
}

/* Form submission handlers */

/**
 * 
 */
export const onLoginFormSuccess = function(loginFormData: LoginData) {
    this['uiComponent'].store.dispatch(submitLoginRequestAction({ data: loginFormData }));
}

/**
 * 
 */
export const onSignupFormSuccess = function(signupFormData: SignupData) {
    this['uiComponent'].store.dispatch(submitSignupRequestAction({ data: signupFormData }));
}