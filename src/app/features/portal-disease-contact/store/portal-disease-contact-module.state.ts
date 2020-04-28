import { ActionReducerMap } from "@ngrx/store";
import { DiseaseContactFormState } from './reducers/disease-contact-form/disease-contact-form.state';
import { DiseaseContactEditState } from './reducers/disease-contact-edit/disease-contact-edit.state';
import * as fromDiseaseContactFormReducer from "./reducers/disease-contact-form/disease-contact-form.reducer";
import * as fromDiseaseContactEditReducer from "./reducers/disease-contact-edit/disease-contact-edit.reducer";


/**
 * State of application
 */
export interface PortalDiseaseContactModuleState {
    diseaseContactFormState: DiseaseContactFormState,
    diseaseContactEditState: DiseaseContactEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalDiseaseContactModuleState> = {
    diseaseContactFormState: fromDiseaseContactFormReducer.diseaseContactFormReducer,
    diseaseContactEditState: fromDiseaseContactEditReducer.diseaseContactEditReducer,
};



