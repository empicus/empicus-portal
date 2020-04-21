import { ActionReducerMap } from "@ngrx/store";
import { AcademicOrderFormState } from './reducers/academic-order-form/academic-order-form.state';
import { AcademicOrderEditState } from './reducers/academic-order-edit/academic-order-edit.state';
import * as fromAcademicOrderFormReducer from "./reducers/academic-order-form/academic-order-form.reducer";
import * as fromAcademicOrderEditReducer from "./reducers/academic-order-edit/academic-order-edit.reducer";


/**
 * State of application
 */
export interface PortalAcademicModuleState {
    academicOrderFormState: AcademicOrderFormState,
    academicOrderEditState: AcademicOrderEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalAcademicModuleState> = {
    academicOrderFormState: fromAcademicOrderFormReducer.academicOrderFormReducer,
    academicOrderEditState: fromAcademicOrderEditReducer.academicOrderEditReducer,
};



