import { AbstractData } from 'helion-core';
import { ProjectEditData } from '../../../data/project-edit/project-edit.data';


/**
 * Defines the state of our ui
 */
export interface ProjectEditState extends AbstractData {
    userTask: ProjectEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialProjectEditState: ProjectEditState = {
    userTask: new ProjectEditData()
};
