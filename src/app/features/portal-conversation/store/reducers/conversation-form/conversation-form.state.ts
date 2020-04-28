import { AbstractData } from 'helion-core';
import { ConversationFormData } from '../../../data/conversation-form/conversation-form.data';


/**
 * Defines the state of our ui
 */
export interface ConversationFormState extends AbstractData {
    userTask: ConversationFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialConversationFormState: ConversationFormState = {
    userTask: new ConversationFormData()
};
