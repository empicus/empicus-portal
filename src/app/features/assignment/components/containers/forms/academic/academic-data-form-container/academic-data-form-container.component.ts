import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiComponentUtils, FormContainerComponent } from 'helion-ui-components';
import { PortalAssignmentModuleState } from '../../../../../store/assignment-module.state';
import { AcademicDataFormContainerController } from "./academic-data-form-container.controller";
import { ArtifactData } from 'helion-core';

@Component({
    selector: 'app-academic-data-form-container',
    templateUrl: './academic-data-form-container.component.html',
    styleUrls: ['./academic-data-form-container.component.scss']
})
export class AcademicDataFormContainerComponent extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicDataFormContainerController);
    }

    ngOnInit(): void {
    }

}
