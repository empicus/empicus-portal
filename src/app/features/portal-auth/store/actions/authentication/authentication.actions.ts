import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { AuthenticationData } from '../../../data/auth/authentication.data';
import { LoginData } from '../../../data/forms/login.data';
import { ResetPasswordData } from '../../../data/forms/reset-password.data';
import { SignupData } from '../../../data/forms/signup.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitLoginRequestAction = createAction('[LoginRequest] Login Request', props<{data: LoginData}>());

export const submitLoginRequestSuccessAction = createAction('[LoginRequestSuccess] Login Request Success', props<{data: ArtifactData}>());

export const submitLoginRequestFailureAction = createAction('[LoginRequestFailure] Login Request Error', props<{data: ErrorData}>());

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitLogoutRequestAction = createAction('[LogoutRequest] Logout Request', props<{authenticationData: AuthenticationData}>());

export const submitLogoutRequestSuccessAction = createAction('[LogoutRequestSuccess] Logout Request Success', props<{data: ArtifactData}>());

export const submitLogoutRequestFailureAction = createAction('[LogoutRequestFailure] Logout Request Error', props<{data: ErrorData}>());

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitResetPasswordTokenRequestAction = createAction('[ResetPasswordTokenRequest] Reset Password Token Request', props<{data: ResetPasswordData}>());

export const submitResetPasswordTokenRequestSuccessAction = createAction('[ResetPasswordTokenRequestSuccess] Reset Password Token Success', props<{data: ArtifactData}>());

export const submitResetPasswordTokenRequestFailureAction = createAction('[ResetPasswordTokenRequestFailure] Reset Password Token Failure', props<{data: ErrorData}>());

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitResetPasswordRequestAction = createAction('[ResetPasswordRequest] Reset Password Request', props<{data: ResetPasswordData}>());

export const submitResetPasswordRequestSuccessAction = createAction('[ResetPasswordRequestSuccess] Reset Password Request Success', props<{data: ArtifactData}>());

export const submitResetPasswordRequestFailureAction = createAction('[ResetPasswordRequestFailure] Reset Password Request Error', props<{data: ErrorData}>());

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitSignupRequestAction = createAction('[SignupRequest] Signup Request', props<{data: SignupData}>());

export const submitSignupRequestSuccessAction = createAction('[SignupRequestSuccess] Signup Request Success', props<{data: ArtifactData}>());

export const submitSignupRequestFailureAction = createAction('[SignupRequestFailure] Signup Request Failure', props<{data: ErrorData}>());


export const updateUserAuthenticationCredentialsAction = createAction('[AuthenticationCredentialsUpdate] Authentication Credentials Update', props<{data: AuthenticationData}>());


