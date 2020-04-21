import { createReducer, on, Action } from "@ngrx/store";
import { ContentOrderWizardState, initialContentOrderWizardState } from "./content-order-wizard.state";
import *  as fromContentOrderWizardReducerFunctions from './content-order-wizard.reducer.functions'
import * as fromContentOrderWizardActions from "../../actions/content-order-wizard.actions";

const reducer = createReducer(
    initialContentOrderWizardState,
    on(fromContentOrderWizardActions.showCowInfoFormAction, (state, { data }) => fromContentOrderWizardReducerFunctions.onShowCowInfoFormEvent(state, data)),
    on(fromContentOrderWizardActions.showCowDetailFormAction, (state, { data }) => fromContentOrderWizardReducerFunctions.onShowCowDetailsFormEvent(state, data)),
    on(fromContentOrderWizardActions.showCowDataFormAction, (state, { data }) => fromContentOrderWizardReducerFunctions.onShowCowDataFormEvent(state, data)),
    on(fromContentOrderWizardActions.showCowInvoiceFormAction, (state, { data }) => fromContentOrderWizardReducerFunctions.onShowCowInvoiceFormEvent(state, data)),
    on(fromContentOrderWizardActions.calculateCowCostAction, (state, { data }) => fromContentOrderWizardReducerFunctions.onCalculateCowCostEvent(state, data)),
    on(fromContentOrderWizardActions.cowCostCalculatedAction, (state, { data }) => fromContentOrderWizardReducerFunctions.onCowCostCalculatedAction(state, data)),
);

export function contentOrderWizardReducer(state: ContentOrderWizardState | undefined, action: Action) {
    return reducer(state, action);
}


/**
 *
 * @param state
 */
export const getContentOrderWizardDataState = (state: ContentOrderWizardState) => state.contentOrderWizardData;

/**
 *
 * @param state
 */
export const getCowStepState = (state: ContentOrderWizardState) => state.wizardStep;

/**
 *
 * @param state
 */
export const getCowCartDataState = (state: ContentOrderWizardState) => state.cartData;



