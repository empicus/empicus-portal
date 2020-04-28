import { PostFormData } from "../../../data/post-form/post-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitPostFormRequestAction, 
	submitPostFormSuccessAction, 
	submitPostFormFailureAction, 
} from "../../../store/actions/post-form/post-form.actions";

@FormContainerController({ model: PostFormData })
export class  PostFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('PostFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitPostFormRequestAction({ data: eventData.eventData }));
	}

}