import { AbstractData } from 'helion-core';
import { AcademicOrderEditData } from '../../../data/academic-order-edit/academic-order-edit.data';


/**
 * Defines the state of our ui
 */
export interface AcademicOrderEditState extends AbstractData {
    userTask: AcademicOrderEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialAcademicOrderEditState: AcademicOrderEditState = {
    userTask: new AcademicOrderEditData()
};
