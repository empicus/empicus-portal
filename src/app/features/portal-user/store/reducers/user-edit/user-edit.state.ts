import { AbstractData } from 'helion-core';
import { UserEditData } from '../../../data/user-edit/user-edit.data';


/**
 * Defines the state of our ui
 */
export interface UserEditState extends AbstractData {
    userTask: UserEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialUserEditState: UserEditState = {
    userTask: new UserEditData()
};
