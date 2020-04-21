import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { ContentOrderDetailsWidgetController } from './content-order-details-widget.controller';

@Component({
    selector: 'content-order-details-widget',
    templateUrl: './content-order-details-widget.component.html',
    styleUrls: ['./content-order-details-widget.scss']
})
export class ContentOrderDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, ContentOrderDetailsWidgetController);
    }


}

