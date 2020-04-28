import { AbstractData } from 'helion-core';
import { DiseaseEditData } from '../../../data/disease-edit/disease-edit.data';


/**
 * Defines the state of our ui
 */
export interface DiseaseEditState extends AbstractData {
    userTask: DiseaseEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialDiseaseEditState: DiseaseEditState = {
    userTask: new DiseaseEditData()
};
