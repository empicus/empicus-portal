import { ArtifactData } from 'helion-core';
import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import { CartData } from '../../../../../data/cart/cart.data';
import * as formData from '../../../../../util/form-data.constants';
import { ListItem } from '../../../../../../portal-shared/data/list-item/list-item.data';
import { AcademicOrderWizardData } from '../../../../../data/wizards/academic-order-wizard.data';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';

@FormWidgetController({
    model: EntityData,
	hasRecaptcha: false,
	functions:[
		{ functionName: 'transitionTo', func: serviceOrderFunctions.transitionTo },
		{ functionName: 'aowCalculate', func: serviceOrderFunctions.aowCalculate },
		{ functionName: 'aowCalculateImpl', func: serviceOrderFunctions.aowCalculateImpl },
		{ functionName: 'onSubmitSuccess', func: serviceOrderFunctions.onDetailsFormSubmitSuccess },
	]
})
export class DetailsFormWidgetController {
    
    /**
     * Page initialization data
     */
	disciples: ListItem[] = formData.academicDisciplinesItems;
	academicStyles: ListItem[] = formData.academicStylesItems;
	writerLevels: ListItem[] = formData.writerLevelsItems;
	lineSpacing: ListItem[] = formData.lineSpacingItems;

	/**
	 * Ngrx state variables
	 */
	cartData: CartData = new CartData();
	academicOrderWizardData = new AcademicOrderWizardData(); 

}