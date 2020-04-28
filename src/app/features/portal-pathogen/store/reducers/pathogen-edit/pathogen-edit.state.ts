import { AbstractData } from 'helion-core';
import { PathogenEditData } from '../../../data/pathogen-edit/pathogen-edit.data';


/**
 * Defines the state of our ui
 */
export interface PathogenEditState extends AbstractData {
    userTask: PathogenEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialPathogenEditState: PathogenEditState = {
    userTask: new PathogenEditData()
};
