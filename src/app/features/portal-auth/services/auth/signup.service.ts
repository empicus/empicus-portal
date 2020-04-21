import { Injectable } from '@angular/core';
import { ErrorData, ArtifactData } from 'helion-core';
import { EthereumAccountService } from '../ethereum/ethereum-account.service';
import { AuthenticationDataService } from '../data/authentication-data.service';
import { SignupData } from '../../data/forms/signup.data';
import { Store } from '@ngrx/store';
import { AuthModuleState } from '../../store/auth-module.state';
import { AuthenticationData } from '../../data/auth/authentication.data';
import { updateUserAuthenticationCredentialsAction } from '../../store/actions/authentication/authentication.actions';
import { UiNotificationModuleState, openUiNotificationAction, UI_NOTIFICATION_TY_ERROR } from 'helion-ui-notifications';

@Injectable()
export class SignupService {

    constructor(
        private authStore: Store<AuthModuleState>,
        private dataService: AuthenticationDataService,
        private ethAccountService: EthereumAccountService,
        private uiNotificationStore: Store<UiNotificationModuleState>) {
    } 

    /**
     * 
     * @param authenticationData 
     */
    signup(authenticationData: SignupData) {
        let ethAcctData = this.ethAccountService.generate(authenticationData.password);
        let ethAcctMetaData = ethAcctData.toAccountLiteData();
        this.dataService.signup(authenticationData, ethAcctMetaData);
    }

    /**
     * 
     * @param artifactData 
     */
    onSignupRequestSuccess(artifactData: ArtifactData): any {
        let authenticationData = AuthenticationData.fromArtifactData(artifactData);
        authenticationData.isUserAuthenticated = true;
        authenticationData.isUserAuthenticationRequired = false;
        authenticationData.loginTime = new Date().getTime();
        this.authStore.dispatch(updateUserAuthenticationCredentialsAction({ data: authenticationData }));
    }

    /**
     * 
     * @param errorData 
     */
    onSignupRequestFailure(errorData: ErrorData): any {
        this.uiNotificationStore.dispatch(openUiNotificationAction({
            data: {
                type: UI_NOTIFICATION_TY_ERROR,
                message: errorData.message
            }
        }))
    }

}

