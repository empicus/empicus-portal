import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiComponentUtils, FormContainerComponent } from 'helion-ui-components';
import { PortalAssignmentModuleState } from '../../../../../store/assignment-module.state';
import { AcademicInfoFormContainerController } from "./academic-info-form-container.controller";
import { ArtifactData } from 'helion-core';

@Component({
    selector: 'app-academic-info-form-container',
    templateUrl: './academic-info-form-container.component.html',
    styleUrls: ['./academic-info-form-container.component.scss']
})
export class AcademicInfoFormContainerComponent extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicInfoFormContainerController);
    }

    ngOnInit(): void {
    }

}
