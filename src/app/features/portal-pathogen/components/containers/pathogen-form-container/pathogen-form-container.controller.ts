import { PathogenFormData } from "../../../data/pathogen-form/pathogen-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitPathogenFormRequestAction, 
	submitPathogenFormSuccessAction, 
	submitPathogenFormFailureAction, 
} from "../../../store/actions/pathogen-form/pathogen-form.actions";

@FormContainerController({ model: PathogenFormData })
export class  PathogenFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('PathogenFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitPathogenFormRequestAction({ data: eventData.eventData }));
	}

}