import { WidgetController } from 'helion-ui-components';
import { ArtifactData } from 'helion-core';
import * as fromTimelineFunctions from "../../../functions/timeline.functions";

@WidgetController({
    model: ArtifactData,
    functions: [{
        functionName: 'onTimelineActivityClicked',
        func: fromTimelineFunctions.onTimelineActivityClicked
    }]
})
export class TimelineWidgetController {
}
