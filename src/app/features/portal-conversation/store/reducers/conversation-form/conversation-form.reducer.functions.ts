
import { ErrorData, ArtifactData } from 'helion-core';
import { ConversationFormState } from './conversation-form.state';
import { ConversationFormData } from '../../../data/conversation-form/conversation-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitConversationFormRequestEvent = (state: ConversationFormState, data: ConversationFormData): ConversationFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitConversationFormSuccessEvent = (state: ConversationFormState, data: ArtifactData): ConversationFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitConversationFormFailureEvent = (state: ConversationFormState, data: ErrorData): ConversationFormState => {
    return { ...state };
};