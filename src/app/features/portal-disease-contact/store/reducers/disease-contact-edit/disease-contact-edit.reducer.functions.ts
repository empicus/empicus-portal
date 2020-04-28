
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseContactEditState } from './disease-contact-edit.state';
import { DiseaseContactEditData } from '../../../data/disease-contact-edit/disease-contact-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseContactEditRequestEvent = (state: DiseaseContactEditState, data: DiseaseContactEditData): DiseaseContactEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseContactEditSuccessEvent = (state: DiseaseContactEditState, data: ArtifactData): DiseaseContactEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseContactEditFailureEvent = (state: DiseaseContactEditState, data: ErrorData): DiseaseContactEditState => {
    return { ...state };
};