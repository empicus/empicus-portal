
import { ErrorData, ArtifactData } from 'helion-core';
import { PostEditState } from './post-edit.state';
import { PostEditData } from '../../../data/post-edit/post-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitPostEditRequestEvent = (state: PostEditState, data: PostEditData): PostEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPostEditSuccessEvent = (state: PostEditState, data: ArtifactData): PostEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPostEditFailureEvent = (state: PostEditState, data: ErrorData): PostEditState => {
    return { ...state };
};