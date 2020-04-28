import { ActionReducerMap } from "@ngrx/store";
import { TopicFormState } from './reducers/topic-form/topic-form.state';
import { TopicEditState } from './reducers/topic-edit/topic-edit.state';
import * as fromTopicFormReducer from "./reducers/topic-form/topic-form.reducer";
import * as fromTopicEditReducer from "./reducers/topic-edit/topic-edit.reducer";


/**
 * State of application
 */
export interface PortalTopicModuleState {
    topicFormState: TopicFormState,
    topicEditState: TopicEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalTopicModuleState> = {
    topicFormState: fromTopicFormReducer.topicFormReducer,
    topicEditState: fromTopicEditReducer.topicEditReducer,
};



