import { ConversationFormState, initialConversationFormState } from "./conversation-form.state";
import *  as fromConversationFormReducerFunctions from './conversation-form.reducer.functions'
import * as fromConversationFormActions from "../../actions/conversation-form/conversation-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialConversationFormState,
    on(fromConversationFormActions.submitConversationFormRequestAction, (state, { data }) => fromConversationFormReducerFunctions.onSubmitConversationFormRequestEvent(state, data)),
    on(fromConversationFormActions.submitConversationFormSuccessAction, (state, { data }) => fromConversationFormReducerFunctions.onSubmitConversationFormSuccessEvent(state, data)),
    on(fromConversationFormActions.submitConversationFormFailureAction, (state, { data }) => fromConversationFormReducerFunctions.onSubmitConversationFormFailureEvent(state, data))
);

export function conversationFormReducer(state: ConversationFormState | undefined, action: Action) {
    return reducer(state, action);
}

