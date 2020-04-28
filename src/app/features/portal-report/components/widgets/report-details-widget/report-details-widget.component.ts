import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { ReportDetailsWidgetController } from './report-details-widget.controller';

@Component({
    selector: 'report-details-widget',
    templateUrl: './report-details-widget.component.html',
    styleUrls: ['./report-details-widget.scss']
})
export class ReportDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, ReportDetailsWidgetController);
    }


}

