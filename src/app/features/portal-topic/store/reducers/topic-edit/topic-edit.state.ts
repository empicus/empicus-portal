import { AbstractData } from 'helion-core';
import { TopicEditData } from '../../../data/topic-edit/topic-edit.data';


/**
 * Defines the state of our ui
 */
export interface TopicEditState extends AbstractData {
    userTask: TopicEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialTopicEditState: TopicEditState = {
    userTask: new TopicEditData()
};
