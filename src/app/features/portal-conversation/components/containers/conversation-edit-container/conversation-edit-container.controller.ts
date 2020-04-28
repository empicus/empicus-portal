import { ConversationEditData } from "../../../data/conversation-edit/conversation-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitConversationEditRequestAction, 
	submitConversationEditSuccessAction, 
	submitConversationEditFailureAction, 
} from "../../../store/actions/conversation-edit/conversation-edit.actions";

@FormContainerController({ model: ConversationEditData })
export class  ConversationEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ConversationEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitConversationEditRequestAction({ data: eventData.eventData }));
	}

}