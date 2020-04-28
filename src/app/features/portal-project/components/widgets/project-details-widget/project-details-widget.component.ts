import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { ProjectDetailsWidgetController } from './project-details-widget.controller';

@Component({
    selector: 'project-details-widget',
    templateUrl: './project-details-widget.component.html',
    styleUrls: ['./project-details-widget.scss']
})
export class ProjectDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, ProjectDetailsWidgetController);
    }


}

