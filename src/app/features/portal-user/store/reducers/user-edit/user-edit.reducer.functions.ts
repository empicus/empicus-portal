
import { ErrorData, ArtifactData } from 'helion-core';
import { UserEditState } from './user-edit.state';
import { UserEditData } from '../../../data/user-edit/user-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitUserEditRequestEvent = (state: UserEditState, data: UserEditData): UserEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitUserEditSuccessEvent = (state: UserEditState, data: ArtifactData): UserEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitUserEditFailureEvent = (state: UserEditState, data: ErrorData): UserEditState => {
    return { ...state };
};