import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { PostDetailsWidgetController } from './post-details-widget.controller';

@Component({
    selector: 'post-details-widget',
    templateUrl: './post-details-widget.component.html',
    styleUrls: ['./post-details-widget.scss']
})
export class PostDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, PostDetailsWidgetController);
    }


}

