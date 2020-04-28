import { ReportFormData } from "../../../data/report-form/report-form.data";
import { ArtifactData } from 'helion-core';
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitReportFormRequestAction, 
	submitReportFormSuccessAction, 
	submitReportFormFailureAction, 
} from "../../../store/actions/report-form/report-form.actions";

@FormContainerController({ model: ReportFormData })
export class  ReportFormContainerController {

	initData: ArtifactData;

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ReportFormContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitReportFormRequestAction({ data: eventData.eventData }));
	}

}