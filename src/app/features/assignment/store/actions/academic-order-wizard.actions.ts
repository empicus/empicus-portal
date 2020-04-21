import { createAction, props } from '@ngrx/store';
import { CartData } from '../../data/cart/cart.data';
import { AcademicOrderWizardData } from '../../data/wizards/academic-order-wizard.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const showAowInfoFormAction = createAction(
    '[Academic Order Wizard] Show AOW Info Form', props<{data: AcademicOrderWizardData}>());

export const showAowDetailFormAction = createAction(
    '[Academic Order Wizard] Show AOW Details Form', props<{data: AcademicOrderWizardData}>());

export const showAowDataFormAction = createAction(
    '[Academic Order Wizard] Show AOW Data Form', props<{data: AcademicOrderWizardData}>());

export const showAowInvoiceFormAction = createAction(
    '[Academic Order Wizard] Show AOW Invoice Form', props<{data: AcademicOrderWizardData}>());

export const calculateAowCostAction = createAction(
    '[Academic Order Wizard] Calculate AOW Cost', props<{data: AcademicOrderWizardData}>());

export const aowCostCalculatedAction = createAction(
    '[Academic Order Wizard] AOW Cost Calculated', props<{data: CartData}>());

export const aowResetStateAction = createAction('[Academic Order Wizard] AOW Reset');