import { ContentOrderEditData } from "../../../data/content-order-edit/content-order-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitContentOrderEditRequestAction, 
	submitContentOrderEditSuccessAction, 
	submitContentOrderEditFailureAction, 
} from "../../../store/actions/content-order-edit/content-order-edit.actions";

@FormContainerController({ model: ContentOrderEditData })
export class  ContentOrderEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ContentOrderEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitContentOrderEditRequestAction({ data: eventData.eventData }));
	}

}