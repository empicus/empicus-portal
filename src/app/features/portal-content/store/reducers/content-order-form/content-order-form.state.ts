import { AbstractData } from 'helion-core';
import { ContentOrderFormData } from '../../../data/content-order-form/content-order-form.data';


/**
 * Defines the state of our ui
 */
export interface ContentOrderFormState extends AbstractData {
    userTask: ContentOrderFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialContentOrderFormState: ContentOrderFormState = {
    userTask: new ContentOrderFormData()
};
