import { ActionReducerMap } from "@ngrx/store";
import { DiseaseCaseFormState } from './reducers/disease-case-form/disease-case-form.state';
import { DiseaseCaseEditState } from './reducers/disease-case-edit/disease-case-edit.state';
import * as fromDiseaseCaseFormReducer from "./reducers/disease-case-form/disease-case-form.reducer";
import * as fromDiseaseCaseEditReducer from "./reducers/disease-case-edit/disease-case-edit.reducer";


/**
 * State of application
 */
export interface PortalDiseaseCaseModuleState {
    diseaseCaseFormState: DiseaseCaseFormState,
    diseaseCaseEditState: DiseaseCaseEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalDiseaseCaseModuleState> = {
    diseaseCaseFormState: fromDiseaseCaseFormReducer.diseaseCaseFormReducer,
    diseaseCaseEditState: fromDiseaseCaseEditReducer.diseaseCaseEditReducer,
};



