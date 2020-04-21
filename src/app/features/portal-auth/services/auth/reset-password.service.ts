import { Injectable } from '@angular/core';
import { ErrorData, ArtifactData } from 'helion-core';
import { EthereumAccountService } from '../ethereum/ethereum-account.service';
import { AuthenticationDataService } from '../data/authentication-data.service';
import { ResetPasswordData } from '../../data/forms/reset-password.data';

@Injectable()
export class ResetPasswordService {

    constructor(
        private dataService: AuthenticationDataService,
        private ethAccountService: EthereumAccountService) {
    } 

    /**
     * 
     * @param authenticationData 
     */
    requestResetToken(authenticationData: ResetPasswordData) {
    }

    /**
     * 
     * @param data 
     */
    onRequestResetTokenRequestSuccess(artifactData: ArtifactData) {
    }
    
    /**
     * 
     * @param data 
     */
    onRequestResetTokenRequestFailure(errorData: ErrorData) {
    }
    
    /**
     * 
     * @param authenticationData 
     */
    resetPassword(authenticationData: ResetPasswordData) {
    }

    /**
     * 
     * @param data 
     */
    onResetPasswordRequestSuccess(artifactData: ArtifactData) {
    }
    
    /**
     * 
     * @param data 
     */
    onResetPasswordRequestFailure(errorData: ErrorData) {
    }
}

