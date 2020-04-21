import { Component} from '@angular/core';
import { Store } from '@ngrx/store';
import { AbstractData } from 'helion-core';
import { ActivatedRoute } from '@angular/router';
import { 
    FormContainerComponent, 
    UiContextData, UiComponentUtils } from 'helion-ui-components';
import { AuthModuleState } from "../../../store/auth-module.state";
import { LoginContainerController } from "./login-container.controller";
import { Actions, ofType } from '@ngrx/effects';
import { submitLoginRequestSuccessAction } from '../../../store/actions/authentication/authentication.actions';
import { UiModuleState, navigateToAction } from 'helion-ui';

@Component({
    selector: 'login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.scss']
})
export class LoginContainerComponent extends FormContainerComponent {

    constructor(private route: ActivatedRoute, 
        store: Store<AuthModuleState>, private uiStore: Store<UiModuleState>, private actions$: Actions) { 
        super(store)
        this.uiController = UiComponentUtils.initController(this, LoginContainerController);
        this.onAuthenticationSuccess();
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        let routeData = this.route.snapshot.data;
        contextData['initData'] = routeData.loginContainerData;
        super.onUiComponentInit(contextData);
		console.log('Dispatching login event', this.uiController);
    }

    /**
     * 
     */
    onAuthenticationSuccess() {
        this.actions$.pipe(ofType(submitLoginRequestSuccessAction)).subscribe((actionObj) => { 
            this.uiStore.dispatch(navigateToAction({ data: { route: '/home', routeData: [] }}));
        });
    }
}
