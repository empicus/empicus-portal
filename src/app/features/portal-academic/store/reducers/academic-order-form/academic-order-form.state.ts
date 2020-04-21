import { AbstractData } from 'helion-core';
import { AcademicOrderFormData } from '../../../data/academic-order-form/academic-order-form.data';


/**
 * Defines the state of our ui
 */
export interface AcademicOrderFormState extends AbstractData {
    userTask: AcademicOrderFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialAcademicOrderFormState: AcademicOrderFormState = {
    userTask: new AcademicOrderFormData()
};
