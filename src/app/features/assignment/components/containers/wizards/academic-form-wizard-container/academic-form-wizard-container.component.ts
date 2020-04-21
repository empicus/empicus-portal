import { Component, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData, ArtifactData } from 'helion-core';
import { 
    ContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { AcademicFormWizardContainerController } from "./academic-form-wizard-container.controller";
import { PortalAssignmentModuleState, getAowStepSelector, getAowCartDataSelector } from '../../../../../assignment/store/assignment-module.state';

@Component({
    selector: 'academic-form-wizard-container',
    templateUrl: './academic-form-wizard-container.component.html',
    styleUrls: ['./academic-form-wizard-container.scss']
})
export class AcademicFormWizardContainerComponent extends ContainerComponent {

	/**
	 * The resolve data required to
	 * display the form
	 */
	@Input()
    initData: ArtifactData;

    constructor(store: Store<PortalAssignmentModuleState>) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicFormWizardContainerController);
        store.select(getAowStepSelector).subscribe((step: string)=> { this.uiController['wizardStep'] = step });

		store.select(getAowCartDataSelector).subscribe((cartData) => { this.uiController['cartData'] = cartData; });
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        contextData['initData'] = this.initData;
        super.onUiComponentInit(contextData);
    }
}
