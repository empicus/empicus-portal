import { navigateToAction } from "helion-ui"
import { ObjectUtils, ArtifactData } from "helion-core";
import { UiEventData } from 'helion-ui-components';
import { UI_CLICK_EVENT } from '../../portal-shared/util/portal.constants';

/**
 * 
 * @param artifactData 
 */
export const onListWidgetItemClicked = function(artifactData: ArtifactData){
    this['uiComponent'].emit({ eventData: artifactData, eventType: UI_CLICK_EVENT });
}

/**
 * 
 * @param uiEventData 
 */
export const onListItemClicked = function(uiEventData: UiEventData){
    if (ObjectUtils.isValid(uiEventData.eventData)) {
        let artifactData: ArtifactData = uiEventData.eventData;
        let code = artifactData.fieldData['code'].value;
        let detailsRoute = '/portal-academic/view-academic-order/' + code;
        this['uiComponent']['store'].dispatch(navigateToAction({ data: { route: detailsRoute, routeData: [] } }));
    }
}

