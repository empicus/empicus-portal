import { AbstractData } from 'helion-core';
import { PostFormData } from '../../../data/post-form/post-form.data';


/**
 * Defines the state of our ui
 */
export interface PostFormState extends AbstractData {
    userTask: PostFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialPostFormState: PostFormState = {
    userTask: new PostFormData()
};
