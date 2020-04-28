import { TopicFormState, initialTopicFormState } from "./topic-form.state";
import *  as fromTopicFormReducerFunctions from './topic-form.reducer.functions'
import * as fromTopicFormActions from "../../actions/topic-form/topic-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialTopicFormState,
    on(fromTopicFormActions.submitTopicFormRequestAction, (state, { data }) => fromTopicFormReducerFunctions.onSubmitTopicFormRequestEvent(state, data)),
    on(fromTopicFormActions.submitTopicFormSuccessAction, (state, { data }) => fromTopicFormReducerFunctions.onSubmitTopicFormSuccessEvent(state, data)),
    on(fromTopicFormActions.submitTopicFormFailureAction, (state, { data }) => fromTopicFormReducerFunctions.onSubmitTopicFormFailureEvent(state, data))
);

export function topicFormReducer(state: TopicFormState | undefined, action: Action) {
    return reducer(state, action);
}

