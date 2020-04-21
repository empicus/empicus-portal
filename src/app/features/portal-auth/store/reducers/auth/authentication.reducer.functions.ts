
import { ErrorData, ArtifactData } from 'helion-core';
import { AuthenticationState } from './authentication.state';
import { AuthenticationData } from '../../../data/auth/authentication.data';
import { LoginData } from '../../../data/forms/login.data';
import { SignupData } from '../../../data/forms/signup.data';
import { ResetPasswordData } from '../../../data/forms/reset-password.data';

/////////////////////////////////////
// LOGIN REQUEST
/////////////////////////////////////
/**
 * @param state
 * @param action
 */
export const onSubmitLoginRequestEvent = (state: AuthenticationState, data: LoginData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitLoginSuccessEvent = (state: AuthenticationState, data: ArtifactData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitLoginFailureEvent = (state: AuthenticationState, data: ErrorData): AuthenticationState => {
    return { ...state };
};

/////////////////////////////////////
// LOGOUT REQUEST
/////////////////////////////////////
/**
 * @param state
 * @param action
 */
export const onSubmitLogoutRequestEvent = (state: AuthenticationState, data: AuthenticationData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitLogoutSuccessEvent = (state: AuthenticationState, data: ArtifactData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitLogoutFailureEvent = (state: AuthenticationState, data: ErrorData): AuthenticationState => {
    return { ...state };
};

/////////////////////////////////////
// SIGNUP REQUEST
/////////////////////////////////////
/**
 * @param state
 * @param action
 */
export const onSubmitSignupRequestEvent = (state: AuthenticationState, data: SignupData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitSignupSuccessEvent = (state: AuthenticationState, data: ArtifactData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitSignupFailureEvent = (state: AuthenticationState, data: ErrorData): AuthenticationState => {
    return { ...state };
};

/////////////////////////////////////
// RESET PASSWORD TOKEN REQUEST
/////////////////////////////////////
/**
 * @param state
 * @param action
 */
export const onSubmitResetPasswordTokenRequestEvent = (state: AuthenticationState, data: ResetPasswordData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitResetPasswordTokenSuccessEvent = (state: AuthenticationState, data: ArtifactData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitResetPasswordTokenFailureEvent = (state: AuthenticationState, data: ErrorData): AuthenticationState => {
    return { ...state };
};

/////////////////////////////////////
// RESET PASSWORD REQUEST
/////////////////////////////////////
/**
 * @param state
 * @param action
 */
export const onSubmitResetPasswordRequestEvent = (state: AuthenticationState, data: ResetPasswordData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitResetPasswordSuccessEvent = (state: AuthenticationState, data: ArtifactData): AuthenticationState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitResetPasswordFailureEvent = (state: AuthenticationState, data: ErrorData): AuthenticationState => {
    return { ...state };
};

/////////////////////////////////////
// UPDATE ETHEREUM ACCOUNT DETAILS
/////////////////////////////////////
/**
 * @param state
 * @param action
 */
export const onUpdateEthereumAccountDataAction = (state: AuthenticationState, data: AuthenticationData): AuthenticationState => {
    return { ...state, authenticationData: { ...data } };
};
