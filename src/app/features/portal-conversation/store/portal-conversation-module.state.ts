import { ActionReducerMap } from "@ngrx/store";
import { ConversationFormState } from './reducers/conversation-form/conversation-form.state';
import { ConversationEditState } from './reducers/conversation-edit/conversation-edit.state';
import * as fromConversationFormReducer from "./reducers/conversation-form/conversation-form.reducer";
import * as fromConversationEditReducer from "./reducers/conversation-edit/conversation-edit.reducer";


/**
 * State of application
 */
export interface PortalConversationModuleState {
    conversationFormState: ConversationFormState,
    conversationEditState: ConversationEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalConversationModuleState> = {
    conversationFormState: fromConversationFormReducer.conversationFormReducer,
    conversationEditState: fromConversationEditReducer.conversationEditReducer,
};



