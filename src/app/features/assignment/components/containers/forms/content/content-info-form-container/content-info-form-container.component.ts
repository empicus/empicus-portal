import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData } from 'helion-core';
import { FormContainerComponent, UiComponentUtils } from 'helion-ui-components';
import { PortalAssignmentModuleState } from '../../../../../store/assignment-module.state';
import { ContentInfoFormContainerController } from './content-info-form-container.controller';

@Component({
  selector: 'app-content-info-form-container',
  templateUrl: './content-info-form-container.component.html',
  styleUrls: ['./content-info-form-container.component.scss']
})
export class ContentInfoFormContainerComponent extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentInfoFormContainerController);
    }

}

