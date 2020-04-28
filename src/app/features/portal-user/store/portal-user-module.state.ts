import { ActionReducerMap } from "@ngrx/store";
import { UserFormState } from './reducers/user-form/user-form.state';
import { UserEditState } from './reducers/user-edit/user-edit.state';
import * as fromUserFormReducer from "./reducers/user-form/user-form.reducer";
import * as fromUserEditReducer from "./reducers/user-edit/user-edit.reducer";


/**
 * State of application
 */
export interface PortalUserModuleState {
    userFormState: UserFormState,
    userEditState: UserEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalUserModuleState> = {
    userFormState: fromUserFormReducer.userFormReducer,
    userEditState: fromUserEditReducer.userEditReducer,
};



