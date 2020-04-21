import { createSelector, ActionReducerMap } from "@ngrx/store";
import * as fromAcademicOrderWizardReducer from './reducers/academic-order-wizard/academic-order-wizard.reducer';
import * as fromContentOrderWizardReducer from './reducers/content-order-wizard/content-order-wizard.reducer';
import { AcademicOrderWizardState } from './reducers/academic-order-wizard/academic-order-wizard.state';
import { ContentOrderWizardState } from './reducers/content-order-wizard/content-order-wizard.state';


/**
 * State of application
 */
export interface PortalAssignmentModuleState {
    academicOrderWizardState: AcademicOrderWizardState,
    contentOrderWizardState: ContentOrderWizardState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalAssignmentModuleState> = {
    academicOrderWizardState: fromAcademicOrderWizardReducer.academicOrderWizardReducer,
    contentOrderWizardState: fromContentOrderWizardReducer.contentOrderWizardReducer,
};


/**
 * @param appState
 */
export const getAcademicOrderWizardState = (clientOrderModuleState: PortalAssignmentModuleState): AcademicOrderWizardState => {
    return clientOrderModuleState.academicOrderWizardState;
};


export const getAowStepSelector = createSelector(getAcademicOrderWizardState, fromAcademicOrderWizardReducer.getAowStepState);


export const getAowCartDataSelector = createSelector(getAcademicOrderWizardState, fromAcademicOrderWizardReducer.getAowCartDataState);


export const getAcademicOrderWizardDataSelector = createSelector(getAcademicOrderWizardState, fromAcademicOrderWizardReducer.getAcademicOrderWizardDataState);

export const getContentOrderWizardState = (clientOrderModuleState: PortalAssignmentModuleState): ContentOrderWizardState => {
    return clientOrderModuleState.contentOrderWizardState;
};

/**
 * 
 */
export const getCowStepSelector = createSelector(
    getContentOrderWizardState, fromContentOrderWizardReducer.getCowStepState);


export const getCowCartDataSelector = createSelector(
    getContentOrderWizardState, fromContentOrderWizardReducer.getCowCartDataState);


export const getContentOrderWizardDataSelector = createSelector(
    getContentOrderWizardState, fromContentOrderWizardReducer.getContentOrderWizardDataState);




