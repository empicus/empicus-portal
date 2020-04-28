import { Component, Input } from '@angular/core';
import { ArtifactData } from 'helion-core';
import { WidgetComponent, UiComponentUtils } from 'helion-ui-components';
import { UserDetailsWidgetController } from './user-details-widget.controller';

@Component({
    selector: 'user-details-widget',
    templateUrl: './user-details-widget.component.html',
    styleUrls: ['./user-details-widget.scss']
})
export class UserDetailsWidgetComponent extends WidgetComponent {

    @Input()
    artifactData: ArtifactData;

    constructor() {
        super();
        this.uiController = UiComponentUtils.initController(this, UserDetailsWidgetController);
    }


}

