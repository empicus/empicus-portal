import { PostEditData } from "../../../data/post-edit/post-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitPostEditRequestAction, 
	submitPostEditSuccessAction, 
	submitPostEditFailureAction, 
} from "../../../store/actions/post-edit/post-edit.actions";

@FormContainerController({ model: PostEditData })
export class  PostEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('PostEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitPostEditRequestAction({ data: eventData.eventData }));
	}

}