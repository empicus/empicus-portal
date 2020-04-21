
import { ErrorData, ArtifactData } from 'helion-core';
import { ContentOrderFormState } from './content-order-form.state';
import { ContentOrderFormData } from '../../../data/content-order-form/content-order-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitContentOrderFormRequestEvent = (state: ContentOrderFormState, data: ContentOrderFormData): ContentOrderFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitContentOrderFormSuccessEvent = (state: ContentOrderFormState, data: ArtifactData): ContentOrderFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitContentOrderFormFailureEvent = (state: ContentOrderFormState, data: ErrorData): ContentOrderFormState => {
    return { ...state };
};