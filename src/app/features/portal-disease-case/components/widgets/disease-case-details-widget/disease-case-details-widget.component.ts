import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { DiseaseCaseDetailsWidgetController } from './disease-case-details-widget.controller';

@Component({
    selector: 'disease-case-details-widget',
    templateUrl: './disease-case-details-widget.component.html',
    styleUrls: ['./disease-case-details-widget.scss']
})
export class DiseaseCaseDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, DiseaseCaseDetailsWidgetController);
    }


}

