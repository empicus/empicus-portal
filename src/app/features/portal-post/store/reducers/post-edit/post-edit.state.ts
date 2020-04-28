import { AbstractData } from 'helion-core';
import { PostEditData } from '../../../data/post-edit/post-edit.data';


/**
 * Defines the state of our ui
 */
export interface PostEditState extends AbstractData {
    userTask: PostEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialPostEditState: PostEditState = {
    userTask: new PostEditData()
};
