import { ActionReducerMap } from "@ngrx/store";
import { ProjectFormState } from './reducers/project-form/project-form.state';
import { ProjectEditState } from './reducers/project-edit/project-edit.state';
import * as fromProjectFormReducer from "./reducers/project-form/project-form.reducer";
import * as fromProjectEditReducer from "./reducers/project-edit/project-edit.reducer";


/**
 * State of application
 */
export interface PortalProjectModuleState {
    projectFormState: ProjectFormState,
    projectEditState: ProjectEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalProjectModuleState> = {
    projectFormState: fromProjectFormReducer.projectFormReducer,
    projectEditState: fromProjectEditReducer.projectEditReducer,
};



