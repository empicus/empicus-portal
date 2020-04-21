import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import { CartData } from '../../../../../data/cart/cart.data';
import * as formData from '../../../../../util/form-data.constants';
import { ListItem } from '../../../../../../portal-shared/data/list-item/list-item.data';
import { ContentOrderWizardData } from '../../../../../data/wizards/content-order-wizard.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormWidgetController({
    model: EntityData,
	hasRecaptcha: false,
	functions:[
		{ functionName: 'transitionTo', func: serviceOrderFunctions.transitionTo },
		{ functionName: 'cowCalculate', func: serviceOrderFunctions.cowCalculate },
		{ functionName: 'cowCalculateImpl', func: serviceOrderFunctions.cowCalculateImpl },
		{ functionName: 'onSubmitSuccess', func: serviceOrderFunctions.onContentDetailsFormSubmitSuccess },
	]
})
export class ContentDetailsFormWidgetController {
    
    /**
     * Page initialization data
     */
	writerLevels: ListItem[] = formData.writerLevelsItems;
    
	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
	contentOrderWizardData = new ContentOrderWizardData();

}