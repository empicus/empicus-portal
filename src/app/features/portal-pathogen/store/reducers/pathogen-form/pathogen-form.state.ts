import { AbstractData } from 'helion-core';
import { PathogenFormData } from '../../../data/pathogen-form/pathogen-form.data';


/**
 * Defines the state of our ui
 */
export interface PathogenFormState extends AbstractData {
    userTask: PathogenFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialPathogenFormState: PathogenFormState = {
    userTask: new PathogenFormData()
};
