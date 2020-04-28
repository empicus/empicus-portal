import { ReportEditData } from "../../../data/report-edit/report-edit.data";
import { FormContainerController, UiEventData } from "helion-ui-components";
import { 
	submitReportEditRequestAction, 
	submitReportEditSuccessAction, 
	submitReportEditFailureAction, 
} from "../../../store/actions/report-edit/report-edit.actions";

@FormContainerController({ model: ReportEditData })
export class  ReportEditContainerController {

	/**
	 * 
	 * @param eventData 
	 */
	onChildUiComponentEvent(eventData: UiEventData) {
		console.log('ReportEditContainer:::onChildUiComponentEvent##########', eventData);
		this['uiComponent'].store.dispatch(submitReportEditRequestAction({ data: eventData.eventData }));
	}

}