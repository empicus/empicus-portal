import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { PathogenDetailsWidgetController } from './pathogen-details-widget.controller';

@Component({
    selector: 'pathogen-details-widget',
    templateUrl: './pathogen-details-widget.component.html',
    styleUrls: ['./pathogen-details-widget.scss']
})
export class PathogenDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, PathogenDetailsWidgetController);
    }


}

