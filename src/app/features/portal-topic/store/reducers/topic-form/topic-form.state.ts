import { AbstractData } from 'helion-core';
import { TopicFormData } from '../../../data/topic-form/topic-form.data';


/**
 * Defines the state of our ui
 */
export interface TopicFormState extends AbstractData {
    userTask: TopicFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialTopicFormState: TopicFormState = {
    userTask: new TopicFormData()
};
