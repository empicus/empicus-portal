import { ActivityData } from "../data/activity.data";
import { UI_CLICK_EVENT } from '../util/portal.constants';

export const onTimelineActivityClicked = function(activity: ActivityData){
    this['uiComponent'].emit({ eventData: activity, eventType: UI_CLICK_EVENT });
}