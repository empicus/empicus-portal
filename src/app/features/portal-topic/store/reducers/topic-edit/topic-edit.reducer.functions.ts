
import { ErrorData, ArtifactData } from 'helion-core';
import { TopicEditState } from './topic-edit.state';
import { TopicEditData } from '../../../data/topic-edit/topic-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitTopicEditRequestEvent = (state: TopicEditState, data: TopicEditData): TopicEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitTopicEditSuccessEvent = (state: TopicEditState, data: ArtifactData): TopicEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitTopicEditFailureEvent = (state: TopicEditState, data: ErrorData): TopicEditState => {
    return { ...state };
};