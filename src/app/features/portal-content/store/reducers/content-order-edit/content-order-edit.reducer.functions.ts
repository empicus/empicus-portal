
import { ErrorData, ArtifactData } from 'helion-core';
import { ContentOrderEditState } from './content-order-edit.state';
import { ContentOrderEditData } from '../../../data/content-order-edit/content-order-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitContentOrderEditRequestEvent = (state: ContentOrderEditState, data: ContentOrderEditData): ContentOrderEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitContentOrderEditSuccessEvent = (state: ContentOrderEditState, data: ArtifactData): ContentOrderEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitContentOrderEditFailureEvent = (state: ContentOrderEditState, data: ErrorData): ContentOrderEditState => {
    return { ...state };
};