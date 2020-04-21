import { ContentOrderEditState, initialContentOrderEditState } from "./content-order-edit.state";
import *  as fromContentOrderEditReducerFunctions from './content-order-edit.reducer.functions'
import * as fromContentOrderEditActions from "../../actions/content-order-edit/content-order-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialContentOrderEditState,
    on(fromContentOrderEditActions.submitContentOrderEditRequestAction, (state, { data }) => fromContentOrderEditReducerFunctions.onSubmitContentOrderEditRequestEvent(state, data)),
    on(fromContentOrderEditActions.submitContentOrderEditSuccessAction, (state, { data }) => fromContentOrderEditReducerFunctions.onSubmitContentOrderEditSuccessEvent(state, data)),
    on(fromContentOrderEditActions.submitContentOrderEditFailureAction, (state, { data }) => fromContentOrderEditReducerFunctions.onSubmitContentOrderEditFailureEvent(state, data))
);

export function contentOrderEditReducer(state: ContentOrderEditState | undefined, action: Action) {
    return reducer(state, action);
}

