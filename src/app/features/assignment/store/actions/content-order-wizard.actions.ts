import { createAction, props } from '@ngrx/store';
import { CartData } from '../../data/cart/cart.data';
import { ContentOrderWizardData } from '../../data/wizards/content-order-wizard.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const showCowInfoFormAction = createAction(
    '[Content Order Wizard] Show Content Info Form', props<{ data: ContentOrderWizardData }>());

export const showCowDetailFormAction = createAction(
    '[Content Order Wizard] Show Content Details Form', props<{ data: ContentOrderWizardData }>());

export const showCowDataFormAction = createAction(
    '[Content Order Wizard] Show Content Data Form', props<{ data: ContentOrderWizardData }>());

export const showCowInvoiceFormAction = createAction(
    '[Content Order Wizard] Show Content Invoice Form', props<{ data: ContentOrderWizardData }>());

export const calculateCowCostAction = createAction(
    '[Content Order Wizard] Calculate Content Cost', props<{ data: ContentOrderWizardData }>());

export const cowCostCalculatedAction = createAction(
    '[Content Order Wizard] Content Cost Calculated', props<{ data: CartData }>());
