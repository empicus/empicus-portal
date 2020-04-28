import { ActionReducerMap } from "@ngrx/store";
import { DiseaseFormState } from './reducers/disease-form/disease-form.state';
import { DiseaseEditState } from './reducers/disease-edit/disease-edit.state';
import * as fromDiseaseFormReducer from "./reducers/disease-form/disease-form.reducer";
import * as fromDiseaseEditReducer from "./reducers/disease-edit/disease-edit.reducer";


/**
 * State of application
 */
export interface PortalDiseaseModuleState {
    diseaseFormState: DiseaseFormState,
    diseaseEditState: DiseaseEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalDiseaseModuleState> = {
    diseaseFormState: fromDiseaseFormReducer.diseaseFormReducer,
    diseaseEditState: fromDiseaseEditReducer.diseaseEditReducer,
};



