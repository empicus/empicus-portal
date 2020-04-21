import { 
    ArtifactData, 
    AbstractData, 
} from "helion-core";
import { ContainerController, UiContextData } from "helion-ui-components";
import { UI_CLICK_EVENT } from 'src/app/features/portal-shared/util/portal.constants';
import * as fromAcademicFunctions from '../../../functions/portal-academic.functions';

@ContainerController({ 
    model: ArtifactData,
    widgetEventHandlers: [{ 
        eventType: UI_CLICK_EVENT, 
        handler: { functionName: 'onListItemClicked', func: fromAcademicFunctions.onListItemClicked }
    }]
})
export class AcademicOrderListContainerController  {
    /**
     * Every UiComponent is backed by
     * a data model object
     */
    data: AbstractData;
    activities: ArtifactData[] = [];

    /**
     * This function is provided as a hook for 
     * subclasses to do additional initialization work
     * @param contextData 
     */
    doOnUiComponentInit(contextData: UiContextData<AbstractData>) {
        let that = this;
        this.data = contextData.data;
        this.activities = contextData['activities'];
    }
}
