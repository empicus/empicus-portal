
import { AcademicOrderWizardState, initialAcademicOrderWizardState } from './academic-order-wizard.state';
import { 
    AOW_DETAILS_STATE, AOW_INVOICE_STATE, 
    AOW_INFO_STATE, AOW_DATA_STATE } from '../../../util/client-order.constants';
    import { CartData } from '../../../data/cart/cart.data';
import { AcademicOrderWizardData } from '../../../data/wizards/academic-order-wizard.data';

/**
 * @param state
 * @param action
 */
export const onShowAowInfoFormEvent = (state: AcademicOrderWizardState, data: AcademicOrderWizardData): AcademicOrderWizardState => {
    return { 
        ...state, 
        academicOrderWizardData: { ...state.academicOrderWizardData, ...data }, 
        wizardStep: AOW_INFO_STATE 
    };
};

/**
 * @param state
 * @param action
 */
export const onShowAowDetailsFormEvent = (state: AcademicOrderWizardState, data: AcademicOrderWizardData): AcademicOrderWizardState => {
    return { 
        ...state, 
        academicOrderWizardData: { ...state.academicOrderWizardData, ...data }, 
        wizardStep: AOW_DETAILS_STATE  
    };
};

/**
 * @param state
 * @param action
 */
export const onShowAowDataFormEvent = (state: AcademicOrderWizardState, data: AcademicOrderWizardData): AcademicOrderWizardState => {
    return { 
        ...state, 
        academicOrderWizardData: { ...state.academicOrderWizardData, ...data }, 
        wizardStep: AOW_DATA_STATE  
    };
};

/**
 * @param state
 * @param action
 */
export const onShowAowInvoiceFormEvent = (state: AcademicOrderWizardState, data: AcademicOrderWizardData): AcademicOrderWizardState => {
    return { 
        ...state, 
        academicOrderWizardData: { ...state.academicOrderWizardData, ...data }, 
        wizardStep: AOW_INVOICE_STATE   
    };
};

/**
 * @param state
 * @param action
 */
export const onCalculateAowCostEvent = (state: AcademicOrderWizardState, data: AcademicOrderWizardData): AcademicOrderWizardState => {
    return { 
        ...state, 
        academicOrderWizardData: { ...state.academicOrderWizardData, ...data } 
    };
};

/**
 * @param state
 * @param action
 */
export const onAowCostCalculatedAction = (state: AcademicOrderWizardState, data: CartData): AcademicOrderWizardState => {
    return { 
        ...state, 
        cartData: data
    };
};

/**
 * @param state
 * @param action
 */
export const onAowResetAction = (state: AcademicOrderWizardState): AcademicOrderWizardState => {
    return { ...initialAcademicOrderWizardState };
};