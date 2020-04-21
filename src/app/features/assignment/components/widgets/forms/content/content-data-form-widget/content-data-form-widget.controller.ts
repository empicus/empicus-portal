import { ArtifactData } from 'helion-core';
import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import { CartData } from '../../../../../data/cart/cart.data';
import { transitionTo, aowCalculate } from '../../../../../functions/controllers/details-form-widget.functions';
import { ContentOrderWizardData } from '../../../../../data/wizards/content-order-wizard.data';

@FormWidgetController({
    model: EntityData,
	hasRecaptcha: false,
	functions:[
		{ functionName:'transitionTo', func: transitionTo },
		{ functionName: 'aowCalculate', func: aowCalculate }
	]
})
export class ContentDataFormWidgetController {
    
    /**
     * Page initialization data
     */
	disciples: ArtifactData[] = [];
	academicStyles: ArtifactData[] = [];
    
	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
	contentOrderWizardData = new ContentOrderWizardData();

}