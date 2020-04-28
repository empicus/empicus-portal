import { AbstractData } from 'helion-core';
import { DiseaseCaseEditData } from '../../../data/disease-case-edit/disease-case-edit.data';


/**
 * Defines the state of our ui
 */
export interface DiseaseCaseEditState extends AbstractData {
    userTask: DiseaseCaseEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialDiseaseCaseEditState: DiseaseCaseEditState = {
    userTask: new DiseaseCaseEditData()
};
