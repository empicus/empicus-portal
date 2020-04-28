
import { ErrorData, ArtifactData } from 'helion-core';
import { ProjectEditState } from './project-edit.state';
import { ProjectEditData } from '../../../data/project-edit/project-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitProjectEditRequestEvent = (state: ProjectEditState, data: ProjectEditData): ProjectEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitProjectEditSuccessEvent = (state: ProjectEditState, data: ArtifactData): ProjectEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitProjectEditFailureEvent = (state: ProjectEditState, data: ErrorData): ProjectEditState => {
    return { ...state };
};