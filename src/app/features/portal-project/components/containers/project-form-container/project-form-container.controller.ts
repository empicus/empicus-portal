import { ProjectFormData } from "../../../data/project-form/project-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitProjectFormRequestAction, 
	submitProjectFormSuccessAction, 
	submitProjectFormFailureAction, 
} from "../../../store/actions/project-form/project-form.actions";

@FormContainerController({ model: ProjectFormData })
export class  ProjectFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ProjectFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitProjectFormRequestAction({ data: eventData.eventData }));
	}

}