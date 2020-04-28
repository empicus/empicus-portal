
import { ErrorData, ArtifactData } from 'helion-core';
import { PathogenFormState } from './pathogen-form.state';
import { PathogenFormData } from '../../../data/pathogen-form/pathogen-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitPathogenFormRequestEvent = (state: PathogenFormState, data: PathogenFormData): PathogenFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPathogenFormSuccessEvent = (state: PathogenFormState, data: ArtifactData): PathogenFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPathogenFormFailureEvent = (state: PathogenFormState, data: ErrorData): PathogenFormState => {
    return { ...state };
};