import { FormContainerController, UiEventData } from "helion-ui-components";
import { EntityData } from 'helion-ui-forms';
import { 
    COW_START_STATE, COW_DATA_STATE, 
    COW_INFO_STATE, COW_DETAILS_STATE, 
    COW_INVOICE_STATE, COW_CONFIRMED_STATE, COW_END_STATE 
} from '../../../../util/client-order.constants';

@FormContainerController({ model: EntityData })
export class  ContentFormWizardContainerController {

    wizardStep = 'COW_START_STATE';

    COW_START_STATE = COW_START_STATE;
    COW_INFO_STATE = COW_INFO_STATE;
    COW_DETAILS_STATE = COW_DETAILS_STATE;
    COW_DATA_STATE = COW_DATA_STATE;
    COW_INVOICE_STATE = COW_INVOICE_STATE;
    COW_CONFIRMED_STATE = COW_CONFIRMED_STATE;
    COW_END_STATE = COW_END_STATE;

}