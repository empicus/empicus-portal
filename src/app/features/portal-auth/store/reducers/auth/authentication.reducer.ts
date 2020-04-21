import { createReducer, on, Action } from "@ngrx/store";
import { AuthenticationState, initialAuthenticationState } from "./authentication.state";
import *  as fromAuthenticationReducerFunctions from './authentication.reducer.functions'
import * as fromAuthenticationActions from "../../actions/authentication/authentication.actions";

const reducer = createReducer(
    initialAuthenticationState,
    on(fromAuthenticationActions.submitLoginRequestAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitLoginRequestEvent(state, data)),
    on(fromAuthenticationActions.submitLoginRequestSuccessAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitLoginSuccessEvent(state, data)),
    on(fromAuthenticationActions.submitLoginRequestFailureAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitLoginFailureEvent(state, data)),
    
    on(fromAuthenticationActions.submitLogoutRequestAction, (state, { authenticationData }) => fromAuthenticationReducerFunctions.onSubmitLogoutRequestEvent(state, authenticationData)),
    on(fromAuthenticationActions.submitLogoutRequestSuccessAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitLogoutSuccessEvent(state, data)),
    on(fromAuthenticationActions.submitLogoutRequestFailureAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitLogoutFailureEvent(state, data)),
    
    
    on(fromAuthenticationActions.submitSignupRequestAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitSignupRequestEvent(state, data)),
    on(fromAuthenticationActions.submitSignupRequestSuccessAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitSignupSuccessEvent(state, data)),
    on(fromAuthenticationActions.submitSignupRequestFailureAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitSignupFailureEvent(state, data)),
    
    on(fromAuthenticationActions.submitResetPasswordTokenRequestAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitResetPasswordTokenRequestEvent(state, data)),
    on(fromAuthenticationActions.submitResetPasswordTokenRequestSuccessAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitResetPasswordTokenSuccessEvent(state, data)),
    on(fromAuthenticationActions.submitResetPasswordTokenRequestFailureAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitResetPasswordTokenFailureEvent(state, data)),
    
    on(fromAuthenticationActions.submitResetPasswordRequestAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitResetPasswordRequestEvent(state, data)),
    on(fromAuthenticationActions.submitResetPasswordRequestSuccessAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitResetPasswordSuccessEvent(state, data)),
    on(fromAuthenticationActions.submitResetPasswordRequestFailureAction, (state, { data }) => fromAuthenticationReducerFunctions.onSubmitResetPasswordFailureEvent(state, data)),
    
    on(fromAuthenticationActions.updateUserAuthenticationCredentialsAction, (state, { data }) => fromAuthenticationReducerFunctions.onUpdateEthereumAccountDataAction(state, data))
);

export function authenticationReducer(state: AuthenticationState | undefined, action: Action) {
    return reducer(state, action);
}

/**
 *
 * @param state
 */
export const getUserAuthenticationState = (state: AuthenticationState) => state.authenticationData;

