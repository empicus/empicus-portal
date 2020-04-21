import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { LoginData } from '../../data/forms/login.data';
import { AuthenticationDataService } from '../data/authentication-data.service';
import { UiNotificationModuleState, openUiNotificationAction, UI_NOTIFICATION_TY_ERROR } from 'helion-ui-notifications';
import { AuthenticationData } from '../../data/auth/authentication.data';
import { AuthModuleState } from '../../store/auth-module.state';
import { updateUserAuthenticationCredentialsAction } from '../../store/actions/authentication/authentication.actions';
import { UiModuleState, navigateToAction } from 'helion-ui';

@Injectable()
export class LoginService {

    constructor(
        private uiStore: Store<UiModuleState>,
        private authStore: Store<AuthModuleState>,
        private dataService: AuthenticationDataService,
        private uiNotificationStore: Store<UiNotificationModuleState>) {
    } 

    /**
     * 
     * @param authenticationData 
     */
    login(loginData: LoginData) {
        this.dataService.login(loginData);
    }

    /**
     * The parameter contains the following 
     * - SecretCiphertext
     * - SecretIv
     * - PassphraseSalt
     * - PassphrasePBKDF2Iterations
     * @param data 
     */
    onLoginSuccess(data: ArtifactData): any {
        let authenticationData = AuthenticationData.fromArtifactData(data);
        authenticationData.isUserAuthenticated = true;
        authenticationData.isUserAuthenticationRequired = false;
        authenticationData.loginTime = new Date().getTime();
        this.authStore.dispatch(updateUserAuthenticationCredentialsAction({ data: authenticationData }));
    }

    /**
     * 
     * @param data 
     */
    onLoginFailure(errorData: ErrorData): any {
        this.uiNotificationStore.dispatch(openUiNotificationAction({
            data: {
                type: UI_NOTIFICATION_TY_ERROR,
                message: errorData.message
            }
        }))
    }

    /**
     * 
     * @param authenticationData 
     */
    logout(authenticationData: AuthenticationData) {
        this.dataService.logout(authenticationData);
    }

    /**
     * The parameter contains the following 
     * - SecretCiphertext
     * - SecretIv
     * - PassphraseSalt
     * - PassphrasePBKDF2Iterations
     * @param data 
     */
    onLogoutSuccess(data: ArtifactData): any {
        let authenticationData = AuthenticationData.initEmptyInstance();
        this.authStore.dispatch(updateUserAuthenticationCredentialsAction({ data: authenticationData }));
        this.uiStore.dispatch(navigateToAction({ data: { route: '/home', routeData: [] }}));
    }

    /**
     * 
     * @param data 
     */
    onLogoutFailure(errorData: ErrorData): any {
        this.uiNotificationStore.dispatch(openUiNotificationAction({
            data: {
                type: UI_NOTIFICATION_TY_ERROR,
                message: errorData.message
            }
        }))
    }


}

