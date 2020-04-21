import { AbstractData } from 'helion-core';
import { CartData } from '../../../data/cart/cart.data';
import { COW_START_STATE } from '../../../util/client-order.constants';
import { ContentOrderWizardData } from '../../../data/wizards/content-order-wizard.data';


/**
 * 
 */
export interface ContentOrderWizardState extends AbstractData {
    wizardStep: string;
    cartData: CartData;
    contentOrderWizardData: ContentOrderWizardData;
}

/**
 * 
 */
export const initialContentOrderWizardState: ContentOrderWizardState = {
    wizardStep: COW_START_STATE,
    cartData: new CartData(),
    contentOrderWizardData: new ContentOrderWizardData()
};
