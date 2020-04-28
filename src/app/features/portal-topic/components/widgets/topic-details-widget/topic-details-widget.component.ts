import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { TopicDetailsWidgetController } from './topic-details-widget.controller';

@Component({
    selector: 'topic-details-widget',
    templateUrl: './topic-details-widget.component.html',
    styleUrls: ['./topic-details-widget.scss']
})
export class TopicDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, TopicDetailsWidgetController);
    }


}

