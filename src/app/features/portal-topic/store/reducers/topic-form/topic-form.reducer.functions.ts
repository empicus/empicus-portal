
import { ErrorData, ArtifactData } from 'helion-core';
import { TopicFormState } from './topic-form.state';
import { TopicFormData } from '../../../data/topic-form/topic-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitTopicFormRequestEvent = (state: TopicFormState, data: TopicFormData): TopicFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitTopicFormSuccessEvent = (state: TopicFormState, data: ArtifactData): TopicFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitTopicFormFailureEvent = (state: TopicFormState, data: ErrorData): TopicFormState => {
    return { ...state };
};