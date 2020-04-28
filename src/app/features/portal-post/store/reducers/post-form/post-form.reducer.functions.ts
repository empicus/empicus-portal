
import { ErrorData, ArtifactData } from 'helion-core';
import { PostFormState } from './post-form.state';
import { PostFormData } from '../../../data/post-form/post-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitPostFormRequestEvent = (state: PostFormState, data: PostFormData): PostFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPostFormSuccessEvent = (state: PostFormState, data: ArtifactData): PostFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPostFormFailureEvent = (state: PostFormState, data: ErrorData): PostFormState => {
    return { ...state };
};