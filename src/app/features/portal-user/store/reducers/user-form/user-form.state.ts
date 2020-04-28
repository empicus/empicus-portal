import { AbstractData } from 'helion-core';
import { UserFormData } from '../../../data/user-form/user-form.data';


/**
 * Defines the state of our ui
 */
export interface UserFormState extends AbstractData {
    userTask: UserFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialUserFormState: UserFormState = {
    userTask: new UserFormData()
};
