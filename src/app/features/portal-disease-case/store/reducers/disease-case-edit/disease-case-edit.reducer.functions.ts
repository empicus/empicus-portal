
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseCaseEditState } from './disease-case-edit.state';
import { DiseaseCaseEditData } from '../../../data/disease-case-edit/disease-case-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseCaseEditRequestEvent = (state: DiseaseCaseEditState, data: DiseaseCaseEditData): DiseaseCaseEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseCaseEditSuccessEvent = (state: DiseaseCaseEditState, data: ArtifactData): DiseaseCaseEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseCaseEditFailureEvent = (state: DiseaseCaseEditState, data: ErrorData): DiseaseCaseEditState => {
    return { ...state };
};