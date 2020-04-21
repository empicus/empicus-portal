import { UixState, initialUixState } from "./uix.state";
import *  as fromUixReducerFunctions from './uix.reducer.functions'
import * as fromUixActions from "../../actions/uix/uix.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialUixState,
    on(fromUixActions.closeSideNavAction, (state) => fromUixReducerFunctions.onCloseSideNavEvent(state)),
    on(fromUixActions.openSideNavAction, (state) => fromUixReducerFunctions.onOpenSideNavEvent(state)),
    on(fromUixActions.minimizeSideNavAction, (state) => fromUixReducerFunctions.onMinimizeSideNavEvent(state)),
    on(fromUixActions.closeScreenAction, (state) => fromUixReducerFunctions.onCloseScreenEvent(state)),
    on(fromUixActions.openScreenAction, (state) => fromUixReducerFunctions.onOpenScreenEvent(state)),
    on(fromUixActions.lockScreenAction, (state) => fromUixReducerFunctions.onLockScreenEvent(state)),
    on(fromUixActions.lockScreenUnregisteredAction, (state) => fromUixReducerFunctions.onLockScreenUnregisteredEvent(state))
);

export function uixReducer(state: UixState | undefined, action: Action) {
    return reducer(state, action);
}

/**
 *
 * @param state
 */
export const getUixSideNavState = (state: UixState) => state.sideNavState;

/**
 *
 * @param state
 */
export const getUixScreenState = (state: UixState) => state.screenState;

