import { ContentOrderFormData } from "../../../data/content-order-form/content-order-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitContentOrderFormRequestAction, 
	submitContentOrderFormSuccessAction, 
	submitContentOrderFormFailureAction, 
} from "../../../store/actions/content-order-form/content-order-form.actions";

@FormContainerController({ model: ContentOrderFormData })
export class  ContentOrderFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ContentOrderFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitContentOrderFormRequestAction({ data: eventData.eventData }));
	}

}