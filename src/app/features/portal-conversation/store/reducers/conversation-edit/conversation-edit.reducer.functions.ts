
import { ErrorData, ArtifactData } from 'helion-core';
import { ConversationEditState } from './conversation-edit.state';
import { ConversationEditData } from '../../../data/conversation-edit/conversation-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitConversationEditRequestEvent = (state: ConversationEditState, data: ConversationEditData): ConversationEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitConversationEditSuccessEvent = (state: ConversationEditState, data: ArtifactData): ConversationEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitConversationEditFailureEvent = (state: ConversationEditState, data: ErrorData): ConversationEditState => {
    return { ...state };
};