import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AbstractData, ErrorData, ArtifactData } from 'helion-core';
import { 
    DataService, UrlService, 
    RequestData, ResponseData, RequestUtils 
} from 'helion-core-http';
import { AuthModuleState } from "../../store/auth-module.state";
import * as fromAuthActions from '../../store/actions/authentication/authentication.actions';
import { EthereumAccountMetaData } from '../../data/eth/ethereum-account-meta.data';
import { AuthenticationData } from '../../data/auth/authentication.data';
import { LoginData } from '../../data/forms/login.data';
import { SignupData } from '../../data/forms/signup.data';
import * as fromAuthConstants from '../../util/auth.constants';

@Injectable()
export class AuthenticationDataService {

    constructor(private store: Store<AuthModuleState>,
        private httpService: DataService, private urlService: UrlService) {
    
    } 

    /**
     * 
     * @param authenticationData 
     */
    public login(loginData: LoginData) {
        this.create(loginData, 'login', fromAuthConstants.LOGIN_NOTIFY_MSG).subscribe((responseData) => {
            this.store.dispatch(fromAuthActions.submitLoginRequestSuccessAction({ data: responseData.item }));
            },
            (error) => this.store.dispatch(fromAuthActions.submitLoginRequestFailureAction({data: new ErrorData(error, loginData)}))
        );
    }

    /**
     * 
     * @param authenticationData 
     */
    public logout(authenticationData: AuthenticationData) {
        this.create(authenticationData, 'logout', fromAuthConstants.LOGOUT_NOTIFY_MSG).subscribe((responseData) => {
                this.store.dispatch(fromAuthActions.submitLogoutRequestSuccessAction({ data: responseData.item }));
            },
            (error) => this.store.dispatch(fromAuthActions.submitLogoutRequestFailureAction({data: new ErrorData(error, authenticationData)}))
        );
    }
    
    /**
     * 
     * @param ethereumAccountMetaData 
     */
    public signup(authenticationData: SignupData, ethereumAccountMetaData: EthereumAccountMetaData) {

        let requestData = {
            vector: ethereumAccountMetaData.secretIv,
            userName: authenticationData.userName,
            emailAddress: authenticationData.emailAddress,
            salt: ethereumAccountMetaData.passphraseSalt,
            secret: ethereumAccountMetaData.secretCiphertext,
            signature: ethereumAccountMetaData.tokenSignature,
            publicKey: ethereumAccountMetaData.accountKeyIdentityPublic,
            iterations: ethereumAccountMetaData.passphrasePBKDF2Iterations,
        };

        this.create(requestData, 'signup', fromAuthConstants.SIGNUP_NOTIFY_MSG).subscribe((responseData) => {
                this.store.dispatch(fromAuthActions.submitSignupRequestSuccessAction({ data: responseData.item }));
            },
            (error) => this.store.dispatch(fromAuthActions.submitSignupRequestFailureAction({data: new ErrorData(error, requestData)}))
        );
    }

    /**
     * 
     * @param data 
     * @param serviceName 
     */
    public create<T extends AbstractData>(data: T, serviceName: string, message: string): Observable<ResponseData> {
        let requestData = RequestUtils.fromDataObj(data, serviceName, { notify: true, notifyMsg: message });
        
        requestData.serviceURL = this.urlService.getAndromedaURL() + serviceName;
        return this.httpService.create(requestData);
    }
}

