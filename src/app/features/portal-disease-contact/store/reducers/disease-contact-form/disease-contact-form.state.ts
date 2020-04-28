import { AbstractData } from 'helion-core';
import { DiseaseContactFormData } from '../../../data/disease-contact-form/disease-contact-form.data';


/**
 * Defines the state of our ui
 */
export interface DiseaseContactFormState extends AbstractData {
    userTask: DiseaseContactFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialDiseaseContactFormState: DiseaseContactFormState = {
    userTask: new DiseaseContactFormData()
};
