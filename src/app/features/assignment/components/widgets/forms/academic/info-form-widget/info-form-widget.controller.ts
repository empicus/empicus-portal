import { ArtifactData } from 'helion-core';
import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';

import { CartData } from '../../../../../data/cart/cart.data';
import * as formData from '../../../../../util/form-data.constants';
import { ListItem } from '../../../../../../portal-shared/data/list-item/list-item.data';
import { RangeItem } from '../../../../../../portal-shared/data/range-item/range-item.data';
import { AcademicOrderWizardData } from '../../../../../data/wizards/academic-order-wizard.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormWidgetController({
    model: EntityData,
	hasRecaptcha: false,
	functions: [
		{ functionName: 'aowCalculate', func: serviceOrderFunctions.aowCalculate },
		{ functionName: 'aowCalculateImpl', func: serviceOrderFunctions.aowCalculateImpl },
		{ functionName: 'onTypeOfServiceSelectedEvent', func: serviceOrderFunctions.onTypeOfServiceSelectedEvent }
	]
})
export class InfoFormWidgetController { 

	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
	academicOrderWizardData = new AcademicOrderWizardData();
    
	/** Toggle to display other writing types */
    showExtraWritingTypes = false;

	/**
	 * Page initialization data
	 */
	aLevelItems: ListItem[] = formData.aLevelItems;
	serviceTypeItems: ListItem[] = formData.serviceTypesItems;
	deadLineRangeItems: RangeItem[] = formData.deadLineRangeItems;
    academicWritingTypes: ArtifactData[] = [];
    
}