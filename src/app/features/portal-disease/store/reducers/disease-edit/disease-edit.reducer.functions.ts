
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseEditState } from './disease-edit.state';
import { DiseaseEditData } from '../../../data/disease-edit/disease-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseEditRequestEvent = (state: DiseaseEditState, data: DiseaseEditData): DiseaseEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseEditSuccessEvent = (state: DiseaseEditState, data: ArtifactData): DiseaseEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseEditFailureEvent = (state: DiseaseEditState, data: ErrorData): DiseaseEditState => {
    return { ...state };
};