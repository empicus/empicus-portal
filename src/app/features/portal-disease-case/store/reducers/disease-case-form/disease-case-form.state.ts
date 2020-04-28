import { AbstractData } from 'helion-core';
import { DiseaseCaseFormData } from '../../../data/disease-case-form/disease-case-form.data';


/**
 * Defines the state of our ui
 */
export interface DiseaseCaseFormState extends AbstractData {
    userTask: DiseaseCaseFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialDiseaseCaseFormState: DiseaseCaseFormState = {
    userTask: new DiseaseCaseFormData()
};
