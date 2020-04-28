import { ActionReducerMap } from "@ngrx/store";
import { PostFormState } from './reducers/post-form/post-form.state';
import { PostEditState } from './reducers/post-edit/post-edit.state';
import * as fromPostFormReducer from "./reducers/post-form/post-form.reducer";
import * as fromPostEditReducer from "./reducers/post-edit/post-edit.reducer";


/**
 * State of application
 */
export interface PortalPostModuleState {
    postFormState: PostFormState,
    postEditState: PostEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalPostModuleState> = {
    postFormState: fromPostFormReducer.postFormReducer,
    postEditState: fromPostEditReducer.postEditReducer,
};



