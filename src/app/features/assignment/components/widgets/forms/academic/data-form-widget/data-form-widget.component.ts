import { Component, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArtifactData, AbstractData } from 'helion-core';
import {
	DataFormWidget, FormWidgetComponentController,
	UiComponentUtils, UiContextData
} from 'helion-ui-components';
import { UiNotificationModuleState } from 'helion-ui-notifications';
import { EntityData, } from 'helion-ui-forms';
import { CartData } from '../../../../../data/cart/cart.data';
import { PortalAssignmentModuleState, getAcademicOrderWizardDataSelector } from '../../../../../store/assignment-module.state';
import { AcademicOrderWizardData } from '../../../../../data/wizards/academic-order-wizard.data';
import { DataFormWidgetController } from './data-form-widget.controller';
import { calculateAowCostAction } from 'src/app/features/assignment/store/actions/academic-order-wizard.actions';

@Component({
	selector: 'app-academic-data-form-widget',
	templateUrl: './data-form-widget.component.html',
	styleUrls: ['./data-form-widget.component.scss']
})
export class DataFormWidgetComponent extends DataFormWidget {

	@Input()
	public entityData: EntityData;

	@Input()
	initData: ArtifactData = new ArtifactData();
	/**
	 * NGRX state variables
	 */
	cartData = new CartData();
	academicOrderWizardData = new AcademicOrderWizardData();

	/** File Upload Related Variables */
	dataURLs: any[] = [];
	inputText = "Upload a file";

	@ViewChild('documentInput', { static: false }) inputFile;
	@ViewChild('documentIconContainer', { static: false }) iconContainer;

	uiController: FormWidgetComponentController;

	constructor(private store: Store<PortalAssignmentModuleState>,
		private uiNotificationStore: Store<UiNotificationModuleState>) {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, DataFormWidgetController);

		store.select(getAcademicOrderWizardDataSelector).subscribe(
			(academicOrderWizardData) => { this.uiController['academicOrderWizardData'] = academicOrderWizardData; });
		/* store.select(getAowCartDataSelector).subscribe((cartData) => {
			this.cartData = cartData;
		}) */
	}

	/**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>) {
		super.onUiComponentInit(contextData);
		this.listenToFilesChange();
		this['uiController']['listenForDataFormChanges']('includeSummary', 'Include Summary');
		this['uiController']['listenForDataFormChanges']('includePlagReport', 'Include Plag Report');
		this['uiController']['listenForDataFormChanges']('includeEditorCheck', 'Include Editor');
		this['uiController']['listenForDataFormChanges']('includeSourcesCopy', 'Include Copy Of Sources');
		this['uiController']['listenForDataFormChanges']('includePrioritySupport', 'Include Priority Support');
	}

	/**
	 * 
	 */
	listenToFilesChange() {
		let that = this;
		this.uiController.form.get('document').valueChanges.subscribe(value => {
			this.dataURLs = [];
			var input = this.inputFile.nativeElement;
			this.inputText = input.value.replace(/C:\\fakepath\\/, '');
			this.iconContainer.nativeElement.innerHTML = '';

			for (var i = 0; i < input.files.length; i++) {
				//for multiple files    
				(function (file) {
					that.addLoadedFile(file.name);
					that.academicOrderWizardData.filesToUpload.push({ name: file.name, file: file });
					that.store.dispatch(calculateAowCostAction({ data: that.academicOrderWizardData }));
				})(input.files[i]);
			}
		})
	}

	/**
	 * 
	 * @param name 
	 */
	addLoadedFile(name: any) {
		var li = document.createElement('li');
		li.innerHTML = name;

		/* var image = new Image();
		image.height = 100;
		image.title = name;
		image.src = "http://i.stack.imgur.com/t9QlH.png"; */
		this.iconContainer.nativeElement.appendChild(li);
	}

}