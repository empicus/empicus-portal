import { AbstractData } from 'helion-core';
import { ContentOrderEditData } from '../../../data/content-order-edit/content-order-edit.data';


/**
 * Defines the state of our ui
 */
export interface ContentOrderEditState extends AbstractData {
    userTask: ContentOrderEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialContentOrderEditState: ContentOrderEditState = {
    userTask: new ContentOrderEditData()
};
