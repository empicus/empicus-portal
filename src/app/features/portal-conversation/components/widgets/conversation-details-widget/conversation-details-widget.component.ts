import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { ConversationDetailsWidgetController } from './conversation-details-widget.controller';

@Component({
    selector: 'conversation-details-widget',
    templateUrl: './conversation-details-widget.component.html',
    styleUrls: ['./conversation-details-widget.scss']
})
export class ConversationDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, ConversationDetailsWidgetController);
    }


}

