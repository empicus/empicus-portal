import { ActionReducerMap, createSelector } from "@ngrx/store";
import { AuthenticationState } from "./reducers/auth/authentication.state";
import * as fromAuthenticationReducer from './reducers/auth/authentication.reducer';

/**
 * State of application
 */
export interface AuthModuleState {
    authenticationState: AuthenticationState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<AuthModuleState> = {
    authenticationState: fromAuthenticationReducer.authenticationReducer,
};

/**
 * @param appState
 */
export const getAuthenticationState = (state: AuthModuleState): AuthenticationState => state.authenticationState;

/**
 * 
 */
export const getUserAuthenticationStateSelector = createSelector(getAuthenticationState, fromAuthenticationReducer.getUserAuthenticationState);




