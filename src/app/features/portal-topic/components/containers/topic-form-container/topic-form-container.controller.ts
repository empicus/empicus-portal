import { TopicFormData } from "../../../data/topic-form/topic-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitTopicFormRequestAction, 
	submitTopicFormSuccessAction, 
	submitTopicFormFailureAction, 
} from "../../../store/actions/topic-form/topic-form.actions";

@FormContainerController({ model: TopicFormData })
export class  TopicFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('TopicFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitTopicFormRequestAction({ data: eventData.eventData }));
	}

}