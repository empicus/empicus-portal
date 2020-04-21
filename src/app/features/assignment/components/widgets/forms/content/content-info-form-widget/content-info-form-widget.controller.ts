import { ArtifactData } from 'helion-core';
import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import { CartData } from '../../../../../data/cart/cart.data';
import * as formData from '../../../../../util/form-data.constants';
import { ContentOrderWizardData } from '../../../../../data/wizards/content-order-wizard.data';
import { ListItem } from '../../../../../../portal-shared/data/list-item/list-item.data';
import { RangeItem } from '../../../../../../portal-shared/data/range-item/range-item.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormWidgetController({
    model: EntityData,
	hasRecaptcha: false,
	functions:[
		{ functionName: 'transitionTo', func: serviceOrderFunctions.transitionTo },
		{ functionName: 'cowCalculate', func: serviceOrderFunctions.cowCalculate },
		{ functionName: 'cowCalculateImpl', func: serviceOrderFunctions.cowCalculateImpl },
		{ functionName: 'onSubmitSuccess', func: serviceOrderFunctions.onContentInfoFormSubmitSuccess },
	]
})
export class ContentInfoFormWidgetController {
    
    /**
     * Page initialization data
     */
	contentTypes: ListItem[] = formData.contentTypesItems;
	deadLineRangeItems: RangeItem[] = formData.deadLineRangeItems;
    
	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
	contentOrderWizardData = new ContentOrderWizardData();

}