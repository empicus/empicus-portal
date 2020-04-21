import { EntityData } from 'helion-ui-forms';
import { ContainerController, UiEventData } from "helion-ui-components";
import { showAowDetailFormAction } from '../../../../../assignment/store/actions/academic-order-wizard.actions';
import { 
	AOW_START_STATE, AOW_INFO_STATE, 
	AOW_DETAILS_STATE, AOW_DATA_STATE, 
	AOW_INVOICE_STATE, AOW_CONFIRMED_STATE, AOW_END_STATE 
} from '../../../../util/client-order.constants';
import { CartData } from '../../../../data/cart/cart.data';


@ContainerController({ model: EntityData })
export class AcademicFormWizardContainerController {

	wizardStep = 'AOW_START_STATE';
	cartData: CartData = new CartData();

	AOW_START_STATE = AOW_START_STATE;
	AOW_INFO_STATE = AOW_INFO_STATE;
	AOW_DETAILS_STATE = AOW_DETAILS_STATE;
	AOW_DATA_STATE = AOW_DATA_STATE;
	AOW_INVOICE_STATE = AOW_INVOICE_STATE;
	AOW_CONFIRMED_STATE = AOW_CONFIRMED_STATE;
	AOW_END_STATE = AOW_END_STATE;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		this['uiComponent'].store.dispatch(showAowDetailFormAction({ data: eventData.eventData }));
	}

}