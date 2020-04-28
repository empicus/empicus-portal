import { ActionReducerMap } from "@ngrx/store";
import { PathogenFormState } from './reducers/pathogen-form/pathogen-form.state';
import { PathogenEditState } from './reducers/pathogen-edit/pathogen-edit.state';
import * as fromPathogenFormReducer from "./reducers/pathogen-form/pathogen-form.reducer";
import * as fromPathogenEditReducer from "./reducers/pathogen-edit/pathogen-edit.reducer";


/**
 * State of application
 */
export interface PortalPathogenModuleState {
    pathogenFormState: PathogenFormState,
    pathogenEditState: PathogenEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalPathogenModuleState> = {
    pathogenFormState: fromPathogenFormReducer.pathogenFormReducer,
    pathogenEditState: fromPathogenEditReducer.pathogenEditReducer,
};



