import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { DiseaseContactDetailsWidgetController } from './disease-contact-details-widget.controller';

@Component({
    selector: 'disease-contact-details-widget',
    templateUrl: './disease-contact-details-widget.component.html',
    styleUrls: ['./disease-contact-details-widget.scss']
})
export class DiseaseContactDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, DiseaseContactDetailsWidgetController);
    }


}

