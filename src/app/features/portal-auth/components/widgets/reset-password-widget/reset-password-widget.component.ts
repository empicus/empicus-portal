import { Component, Input } from '@angular/core';
import {
	DataFormWidget, FormWidgetComponentController,
	UiComponentConfig, UiComponentUtils, UiContextData
} from 'helion-ui-components';
import { EntityData } from 'helion-ui-forms';
import { DataFormController } from 'helion-ui-components';
import { AbstractData } from 'helion-core';
import * as fromAuthConstants from '../../../util/auth.constants';

@Component({
	selector: 'reset-password-widget',
	templateUrl: './reset-password-widget.component.html'
})
export class ResetPasswordWidgetComponent extends DataFormWidget {


	@Input()
	public entityData: EntityData;

	@Input()
	public config: UiComponentConfig;

	uiController: FormWidgetComponentController;

	constructor() {
		super();
		this.uiController = <FormWidgetComponentController>UiComponentUtils.initController(this, DataFormController);
    }
    /**
	 * 
	 * @param contextData 
	 */
	onUiComponentInit(contextData: UiContextData<AbstractData>){
        super.onUiComponentInit(contextData);
	}
	
	/**
	 * 
	 */
	transitionToSignupView(){
		this.emit({
			eventType: fromAuthConstants.TRANSITION_TO_SIGNUP_VIEW,
			eventData: {}
		})
	}

	/**
	 * 
	 */
	transitionToLoginView(){
		this.emit({
			eventType: fromAuthConstants.TRANSITION_TO_LOGIN_VIEW,
			eventData: {}
		})

	}

}

