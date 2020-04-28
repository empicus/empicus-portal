
import { ErrorData, ArtifactData } from 'helion-core';
import { UserFormState } from './user-form.state';
import { UserFormData } from '../../../data/user-form/user-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitUserFormRequestEvent = (state: UserFormState, data: UserFormData): UserFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitUserFormSuccessEvent = (state: UserFormState, data: ArtifactData): UserFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitUserFormFailureEvent = (state: UserFormState, data: ErrorData): UserFormState => {
    return { ...state };
};