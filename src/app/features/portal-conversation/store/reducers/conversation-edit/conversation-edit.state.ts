import { AbstractData } from 'helion-core';
import { ConversationEditData } from '../../../data/conversation-edit/conversation-edit.data';


/**
 * Defines the state of our ui
 */
export interface ConversationEditState extends AbstractData {
    userTask: ConversationEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialConversationEditState: ConversationEditState = {
    userTask: new ConversationEditData()
};
