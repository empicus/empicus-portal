import { AbstractData } from 'helion-core';
import { DiseaseFormData } from '../../../data/disease-form/disease-form.data';


/**
 * Defines the state of our ui
 */
export interface DiseaseFormState extends AbstractData {
    userTask: DiseaseFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialDiseaseFormState: DiseaseFormState = {
    userTask: new DiseaseFormData()
};
