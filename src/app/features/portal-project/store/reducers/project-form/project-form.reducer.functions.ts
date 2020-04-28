
import { ErrorData, ArtifactData } from 'helion-core';
import { ProjectFormState } from './project-form.state';
import { ProjectFormData } from '../../../data/project-form/project-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitProjectFormRequestEvent = (state: ProjectFormState, data: ProjectFormData): ProjectFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitProjectFormSuccessEvent = (state: ProjectFormState, data: ArtifactData): ProjectFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitProjectFormFailureEvent = (state: ProjectFormState, data: ErrorData): ProjectFormState => {
    return { ...state };
};