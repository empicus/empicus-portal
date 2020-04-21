import { ContentOrderFormState, initialContentOrderFormState } from "./content-order-form.state";
import *  as fromContentOrderFormReducerFunctions from './content-order-form.reducer.functions'
import * as fromContentOrderFormActions from "../../actions/content-order-form/content-order-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialContentOrderFormState,
    on(fromContentOrderFormActions.submitContentOrderFormRequestAction, (state, { data }) => fromContentOrderFormReducerFunctions.onSubmitContentOrderFormRequestEvent(state, data)),
    on(fromContentOrderFormActions.submitContentOrderFormSuccessAction, (state, { data }) => fromContentOrderFormReducerFunctions.onSubmitContentOrderFormSuccessEvent(state, data)),
    on(fromContentOrderFormActions.submitContentOrderFormFailureAction, (state, { data }) => fromContentOrderFormReducerFunctions.onSubmitContentOrderFormFailureEvent(state, data))
);

export function contentOrderFormReducer(state: ContentOrderFormState | undefined, action: Action) {
    return reducer(state, action);
}

