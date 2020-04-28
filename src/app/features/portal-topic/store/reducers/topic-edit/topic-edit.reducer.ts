import { TopicEditState, initialTopicEditState } from "./topic-edit.state";
import *  as fromTopicEditReducerFunctions from './topic-edit.reducer.functions'
import * as fromTopicEditActions from "../../actions/topic-edit/topic-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialTopicEditState,
    on(fromTopicEditActions.submitTopicEditRequestAction, (state, { data }) => fromTopicEditReducerFunctions.onSubmitTopicEditRequestEvent(state, data)),
    on(fromTopicEditActions.submitTopicEditSuccessAction, (state, { data }) => fromTopicEditReducerFunctions.onSubmitTopicEditSuccessEvent(state, data)),
    on(fromTopicEditActions.submitTopicEditFailureAction, (state, { data }) => fromTopicEditReducerFunctions.onSubmitTopicEditFailureEvent(state, data))
);

export function topicEditReducer(state: TopicEditState | undefined, action: Action) {
    return reducer(state, action);
}

