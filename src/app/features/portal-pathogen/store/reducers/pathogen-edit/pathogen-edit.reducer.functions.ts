
import { ErrorData, ArtifactData } from 'helion-core';
import { PathogenEditState } from './pathogen-edit.state';
import { PathogenEditData } from '../../../data/pathogen-edit/pathogen-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitPathogenEditRequestEvent = (state: PathogenEditState, data: PathogenEditData): PathogenEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPathogenEditSuccessEvent = (state: PathogenEditState, data: ArtifactData): PathogenEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitPathogenEditFailureEvent = (state: PathogenEditState, data: ErrorData): PathogenEditState => {
    return { ...state };
};