import { Component, OnInit, Input } from '@angular/core';
import { FormContainerComponent, UiComponentUtils } from 'helion-ui-components';
import { ArtifactData } from 'helion-core';
import { Store } from '@ngrx/store';
import { PortalAssignmentModuleState } from '../../../../../store/assignment-module.state';
import { ContentDetailsFormContainerController } from './content-details-form-container.controller';

@Component({
  selector: 'app-content-details-form-container',
  templateUrl: './content-details-form-container.component.html',
  styleUrls: ['./content-details-form-container.component.scss']
})
export class ContentDetailsFormContainerComponent  extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentDetailsFormContainerController);
    }

    ngOnInit(): void {
    }

}

