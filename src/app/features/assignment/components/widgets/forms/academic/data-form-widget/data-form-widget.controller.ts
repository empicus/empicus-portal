import { EntityData } from "helion-ui-forms";
import { FormWidgetController } from 'helion-ui-components';
import * as serviceOrderFunctions from '../../../../../functions/controllers/details-form-widget.functions';
import { aowCalculate, transitionTo } from '../../../../../functions/controllers/details-form-widget.functions';
import { AcademicOrderWizardData } from '../../../../../../assignment/data/wizards/academic-order-wizard.data';

@FormWidgetController({
    model: EntityData,
    hasRecaptcha: false,
	functions: [
		{ functionName:'transitionTo', func: transitionTo },
		{ functionName:'aowCalculate', func: serviceOrderFunctions.aowCalculate },
		{ functionName:'aowCalculateImpl', func: serviceOrderFunctions.aowCalculateImpl },
		{ functionName:'listenForDataFormChanges', func: serviceOrderFunctions.listenForDataFormChanges },
	]
})
export class DataFormWidgetController {
	academicOrderWizardData = new AcademicOrderWizardData(); 
 }