import { TopicEditData } from "../../../data/topic-edit/topic-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitTopicEditRequestAction, 
	submitTopicEditSuccessAction, 
	submitTopicEditFailureAction, 
} from "../../../store/actions/topic-edit/topic-edit.actions";

@FormContainerController({ model: TopicEditData })
export class  TopicEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('TopicEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitTopicEditRequestAction({ data: eventData.eventData }));
	}

}