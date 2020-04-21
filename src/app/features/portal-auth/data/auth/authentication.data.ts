import { AbstractData, ArtifactData, ArtifactUtils } from "helion-core";
import { EthereumAccountData } from '../eth/ethereum-account.data';

export class AuthenticationData implements AbstractData {
    loginTime: number;
    isUserAuthenticated: boolean = false;
    isUserAuthenticationRequired: boolean = true;
    userAccountData: EthereumAccountData;

    public static fromArtifactData(artifactData: ArtifactData): AuthenticationData {
        let authenticationData = new AuthenticationData();
        authenticationData.userAccountData = new EthereumAccountData();
        authenticationData.userAccountData.userName = ArtifactUtils.getFieldValue(artifactData, 'userName');
        authenticationData.userAccountData.password = ArtifactUtils.getFieldValue(artifactData, 'password');

       /* 
        authenticationData.userAccountData = new EthereumAccountData();
        authenticationData.userAccountData.userName = data.fieldData['userName'].value
        authenticationData.userAccountData.secretIv = data.fieldData['secretIv'].value
        authenticationData.userAccountData.secretCiphertext = data.fieldData['secretCiphertext'].value

        authenticationData.userAccountData.accountSecretData = new EthereumAccountSecretData();
        authenticationData.userAccountData.accountSecretData.passphraseSalt = data.fieldData['passphraseSalt'].value;
        authenticationData.userAccountData.accountSecretData.passphrasePBKDF2Iterations = data.fieldData['passphrasePBKDF2Iterations'].value; */

        return authenticationData;
    }
    /**
     * 
     */
    public static initEmptyInstance(){
        let authenticationData = new AuthenticationData();
        authenticationData.loginTime = 0;
        authenticationData.isUserAuthenticated = false;
        authenticationData.isUserAuthenticationRequired = true;
        authenticationData.userAccountData = new EthereumAccountData();
        return authenticationData;
    }

}