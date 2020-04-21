import { Component, OnInit, Input } from '@angular/core';
import { FormContainerComponent, UiComponentUtils } from 'helion-ui-components';
import { ArtifactData } from 'helion-core';
import { Store } from '@ngrx/store';
import { PortalAssignmentModuleState } from '../../../../../store/assignment-module.state';
import { ContentDataFormContainerController } from './content-data-form-container.controller';

@Component({
  selector: 'app-content-data-form-container',
  templateUrl: './content-data-form-container.component.html',
  styleUrls: ['./content-data-form-container.component.scss']
})
export class ContentDataFormContainerComponent  extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentDataFormContainerController);
    }

    ngOnInit(): void {
    }

}

