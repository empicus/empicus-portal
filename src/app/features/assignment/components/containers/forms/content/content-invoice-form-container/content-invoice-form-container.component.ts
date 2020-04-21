import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData } from 'helion-core';
import { FormContainerComponent, UiComponentUtils } from 'helion-ui-components';
import { PortalAssignmentModuleState, getCowCartDataSelector, getContentOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { ContentInvoiceFormContainerController } from './content-invoice-form-container.controller';

@Component({
  selector: 'app-content-invoice-form-container',
  templateUrl: './content-invoice-form-container.component.html',
  styleUrls: ['./content-invoice-form-container.component.scss']
})
export class ContentInvoiceFormContainerComponent  extends FormContainerComponent {

	@Input()
	initData: ArtifactData = new ArtifactData();

    constructor(store: Store<PortalAssignmentModuleState>) {
        super(store)
        this.uiController = UiComponentUtils.initController(this, ContentInvoiceFormContainerController);
        store.select(getCowCartDataSelector).subscribe((cartData) => { this.uiController['cartData'] = cartData; });
        store.select(getContentOrderWizardDataSelector).subscribe(
          (contentOrderWizardData) => { this.uiController['contentOrderWizardData'] = contentOrderWizardData; });
    }

}

