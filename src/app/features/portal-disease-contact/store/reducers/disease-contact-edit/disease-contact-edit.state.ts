import { AbstractData } from 'helion-core';
import { DiseaseContactEditData } from '../../../data/disease-contact-edit/disease-contact-edit.data';


/**
 * Defines the state of our ui
 */
export interface DiseaseContactEditState extends AbstractData {
    userTask: DiseaseContactEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialDiseaseContactEditState: DiseaseContactEditState = {
    userTask: new DiseaseContactEditData()
};
