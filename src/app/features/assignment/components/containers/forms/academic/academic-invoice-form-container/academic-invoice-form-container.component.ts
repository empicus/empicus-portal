import { Component, OnInit, Input } from '@angular/core';
import { FormContainerComponent, UiComponentUtils } from 'helion-ui-components';
import { ArtifactData } from 'helion-core';
import { Store } from '@ngrx/store';
import { PortalAssignmentModuleState, getAowCartDataSelector, getAcademicOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { AcademicInvoiceFormContainerController } from './academic-invoice-form-container.controller';

@Component({
  selector: 'app-academic-invoice-form-container',
  templateUrl: './academic-invoice-form-container.component.html',
  styleUrls: ['./academic-invoice-form-container.component.scss']
})
export class AcademicInvoiceFormContainerComponent extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, AcademicInvoiceFormContainerController);
        store.select(getAowCartDataSelector).subscribe((cartData) => { this.uiController['cartData'] = cartData; });
        store.select(getAcademicOrderWizardDataSelector).subscribe(
          (academicOrderWizardData) => { this.uiController['academicOrderWizardData'] = academicOrderWizardData; });
    }
}

