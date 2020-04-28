import { AbstractData } from 'helion-core';
import { ProjectFormData } from '../../../data/project-form/project-form.data';


/**
 * Defines the state of our ui
 */
export interface ProjectFormState extends AbstractData {
    userTask: ProjectFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialProjectFormState: ProjectFormState = {
    userTask: new ProjectFormData()
};
