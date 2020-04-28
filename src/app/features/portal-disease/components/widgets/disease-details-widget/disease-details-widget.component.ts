import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { DiseaseDetailsWidgetController } from './disease-details-widget.controller';

@Component({
    selector: 'disease-details-widget',
    templateUrl: './disease-details-widget.component.html',
    styleUrls: ['./disease-details-widget.scss']
})
export class DiseaseDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, DiseaseDetailsWidgetController);
    }


}

