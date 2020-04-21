
import { ErrorData, ArtifactData } from 'helion-core';
import { AcademicOrderEditState } from './academic-order-edit.state';
import { AcademicOrderEditData } from '../../../data/academic-order-edit/academic-order-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitAcademicOrderEditRequestEvent = (state: AcademicOrderEditState, data: AcademicOrderEditData): AcademicOrderEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcademicOrderEditSuccessEvent = (state: AcademicOrderEditState, data: ArtifactData): AcademicOrderEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcademicOrderEditFailureEvent = (state: AcademicOrderEditState, data: ErrorData): AcademicOrderEditState => {
    return { ...state };
};