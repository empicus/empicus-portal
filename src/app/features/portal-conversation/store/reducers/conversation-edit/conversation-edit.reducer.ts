import { ConversationEditState, initialConversationEditState } from "./conversation-edit.state";
import *  as fromConversationEditReducerFunctions from './conversation-edit.reducer.functions'
import * as fromConversationEditActions from "../../actions/conversation-edit/conversation-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialConversationEditState,
    on(fromConversationEditActions.submitConversationEditRequestAction, (state, { data }) => fromConversationEditReducerFunctions.onSubmitConversationEditRequestEvent(state, data)),
    on(fromConversationEditActions.submitConversationEditSuccessAction, (state, { data }) => fromConversationEditReducerFunctions.onSubmitConversationEditSuccessEvent(state, data)),
    on(fromConversationEditActions.submitConversationEditFailureAction, (state, { data }) => fromConversationEditReducerFunctions.onSubmitConversationEditFailureEvent(state, data))
);

export function conversationEditReducer(state: ConversationEditState | undefined, action: Action) {
    return reducer(state, action);
}

