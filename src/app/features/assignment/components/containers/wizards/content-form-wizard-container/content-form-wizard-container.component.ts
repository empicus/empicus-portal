import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData, AbstractData } from 'helion-core';
import { PortalAssignmentModuleState, getCowStepSelector } from '../../../../store/assignment-module.state';
import { UiComponentUtils, UiContextData, ContainerComponent } from 'helion-ui-components';
import { ContentFormWizardContainerController } from './content-form-wizard-container.controller';

@Component({
    selector: 'app-content-form-wizard-container',
    templateUrl: './content-form-wizard-container.component.html',
    styleUrls: ['./content-form-wizard-container.component.scss']
})
export class ContentFormWizardContainerComponent extends ContainerComponent {


	/**
	 * The resolve data required to
	 * display the form
	 */
    @Input()
    initData: ArtifactData;

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentFormWizardContainerController);
        store.select(getCowStepSelector).subscribe((step: string) => { this.uiController['wizardStep'] = step });
    }

    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>) {
        contextData['initData'] = this.initData;
        super.onUiComponentInit(contextData);
    }

}
