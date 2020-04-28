import { ConversationFormData } from "../../../data/conversation-form/conversation-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitConversationFormRequestAction, 
	submitConversationFormSuccessAction, 
	submitConversationFormFailureAction, 
} from "../../../store/actions/conversation-form/conversation-form.actions";

@FormContainerController({ model: ConversationFormData })
export class  ConversationFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ConversationFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitConversationFormRequestAction({ data: eventData.eventData }));
	}

}