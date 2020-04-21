import { AbstractData } from 'helion-core';
import { CartData } from '../../../data/cart/cart.data';
import { AOW_START_STATE } from '../../../util/client-order.constants';
import { AcademicOrderWizardData } from '../../../data/wizards/academic-order-wizard.data';


/**
 * 
 */
export interface AcademicOrderWizardState extends AbstractData {
    wizardStep: string;
    cartData: CartData;
    academicOrderWizardData: AcademicOrderWizardData;
}

/**
 * 
 */
export const initialAcademicOrderWizardState: AcademicOrderWizardState = {
    wizardStep: AOW_START_STATE,
    cartData: new CartData(),
    academicOrderWizardData: new AcademicOrderWizardData()
};
