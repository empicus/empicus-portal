
import { ContentOrderWizardState } from './content-order-wizard.state';
import { 
    COW_DETAILS_STATE, COW_INVOICE_STATE, 
    COW_INFO_STATE, COW_DATA_STATE } from '../../../util/client-order.constants';
    import { CartData } from '../../../data/cart/cart.data';
import { ContentOrderWizardData } from '../../../data/wizards/content-order-wizard.data';

/**
 * @param state
 * @param action
 */
export const onShowCowInfoFormEvent = (state: ContentOrderWizardState, data: ContentOrderWizardData): ContentOrderWizardState => {
    return { 
        ...state, 
        contentOrderWizardData: { ...state.contentOrderWizardData, ...data }, 
        wizardStep: COW_INFO_STATE 
    };
};

/**
 * @param state
 * @param action
 */
export const onShowCowDetailsFormEvent = (state: ContentOrderWizardState, data: ContentOrderWizardData): ContentOrderWizardState => {
    return { 
        ...state, 
        contentOrderWizardData: { ...state.contentOrderWizardData, ...data }, 
        wizardStep: COW_DETAILS_STATE  
    };
};

/**
 * @param state
 * @param action
 */
export const onShowCowDataFormEvent = (state: ContentOrderWizardState, data: ContentOrderWizardData): ContentOrderWizardState => {
    return { 
        ...state, 
        contentOrderWizardData: { ...state.contentOrderWizardData, ...data }, 
        wizardStep: COW_DATA_STATE  
    };
};

/**
 * @param state
 * @param action
 */
export const onShowCowInvoiceFormEvent = (state: ContentOrderWizardState, data: ContentOrderWizardData): ContentOrderWizardState => {
    return { 
        ...state, 
        contentOrderWizardData: { ...state.contentOrderWizardData, ...data }, 
        wizardStep: COW_INVOICE_STATE   
    };
};

/**
 * @param state
 * @param action
 */
export const onCalculateCowCostEvent = (state: ContentOrderWizardState, data: ContentOrderWizardData): ContentOrderWizardState => {
    return { 
        ...state, 
        contentOrderWizardData: { ...state.contentOrderWizardData, ...data } 
    };
};

/**
 * @param state
 * @param action
 */
export const onCowCostCalculatedAction = (state: ContentOrderWizardState, data: CartData): ContentOrderWizardState => {
    return { 
        ...state, 
        cartData: data
    };
};