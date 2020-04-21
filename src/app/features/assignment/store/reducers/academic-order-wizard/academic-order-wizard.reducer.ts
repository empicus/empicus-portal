import { createReducer, on, Action } from "@ngrx/store";
import { AcademicOrderWizardState, initialAcademicOrderWizardState } from "./academic-order-wizard.state";
import *  as fromAcademicOrderWizardReducerFunctions from './academic-order-wizard.reducer.functions'
import * as fromAcademicOrderWizardActions from "../../actions/academic-order-wizard.actions";

const reducer = createReducer(
    initialAcademicOrderWizardState,
    on(fromAcademicOrderWizardActions.showAowInfoFormAction, (state, { data }) => fromAcademicOrderWizardReducerFunctions.onShowAowInfoFormEvent(state, data)),
    on(fromAcademicOrderWizardActions.showAowDetailFormAction, (state, { data }) => fromAcademicOrderWizardReducerFunctions.onShowAowDetailsFormEvent(state, data)),
    on(fromAcademicOrderWizardActions.showAowDataFormAction, (state, { data }) => fromAcademicOrderWizardReducerFunctions.onShowAowDataFormEvent(state, data)),
    on(fromAcademicOrderWizardActions.showAowInvoiceFormAction, (state, { data }) => fromAcademicOrderWizardReducerFunctions.onShowAowInvoiceFormEvent(state, data)),
    on(fromAcademicOrderWizardActions.calculateAowCostAction, (state, { data }) => fromAcademicOrderWizardReducerFunctions.onCalculateAowCostEvent(state, data)),
    on(fromAcademicOrderWizardActions.aowCostCalculatedAction, (state, { data }) => fromAcademicOrderWizardReducerFunctions.onAowCostCalculatedAction(state, data)),
    on(fromAcademicOrderWizardActions.aowResetStateAction, (state) => fromAcademicOrderWizardReducerFunctions.onAowResetAction(state)),
);

export function academicOrderWizardReducer(state: AcademicOrderWizardState | undefined, action: Action) {
    return reducer(state, action);
}

/**
 *
 * @param state
 */
export const getAcademicOrderWizardDataState = (state: AcademicOrderWizardState) => state.academicOrderWizardData;

/**
 *
 * @param state
 */
export const getAowStepState = (state: AcademicOrderWizardState) => state.wizardStep;

/**
 *
 * @param state
 */
export const getAowCartDataState = (state: AcademicOrderWizardState) => state.cartData;

