import { ActionReducerMap, createSelector } from "@ngrx/store";
import { UixState } from './reducers/uix/uix.state';
import * as fromUixReducer from './reducers/uix/uix.reducer';


/**
 * State of application
 */
export interface PortalModuleState {
    uixState: UixState
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalModuleState> = {
    uixState: fromUixReducer.uixReducer
};

/**
 * @param appState
 */
export const getUixState = (state: PortalModuleState): UixState => {
    return state.uixState;
};

export const getUixSideNavStateSelector = createSelector(getUixState, fromUixReducer.getUixSideNavState);

export const getUixScreenStateSelector = createSelector(getUixState, fromUixReducer.getUixScreenState);





