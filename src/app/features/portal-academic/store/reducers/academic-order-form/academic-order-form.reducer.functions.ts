
import { ErrorData, ArtifactData } from 'helion-core';
import { AcademicOrderFormState } from './academic-order-form.state';
import { AcademicOrderFormData } from '../../../data/academic-order-form/academic-order-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitAcademicOrderFormRequestEvent = (state: AcademicOrderFormState, data: AcademicOrderFormData): AcademicOrderFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcademicOrderFormSuccessEvent = (state: AcademicOrderFormState, data: ArtifactData): AcademicOrderFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcademicOrderFormFailureEvent = (state: AcademicOrderFormState, data: ErrorData): AcademicOrderFormState => {
    return { ...state };
};