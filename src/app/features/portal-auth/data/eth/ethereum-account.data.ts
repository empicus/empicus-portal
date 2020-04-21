import { AbstractData } from "helion-core";
import { EthereumAccountMetaData } from "./ethereum-account-meta.data";
import { EthereumAccountKeyData } from './ethereum-account-key.data';
import { EthereumAccountSecretData } from './ethereum-account-secret.data';
import { EthereumAccountSignatureData } from './ethereum-account-signature.data';

export class EthereumAccountData implements AbstractData {
    userName: string;
    password: string;
    secretCiphertext: string;
    secretIv: string; 
    accountKeyData: EthereumAccountKeyData = new EthereumAccountKeyData();
    accountSecretData: EthereumAccountSecretData = new EthereumAccountSecretData();
    accountTokenData: EthereumAccountSignatureData = new EthereumAccountSignatureData();


    /**
     * 
     */
    toAccountLiteData() {
        let authenticationLiteData = new EthereumAccountMetaData();
        authenticationLiteData.secretIv = this.secretIv.toString();
        authenticationLiteData.secretCiphertext = this.secretCiphertext.toString();
        authenticationLiteData.passphraseSalt = this.accountSecretData.passphraseSalt.toString();
        authenticationLiteData.passphrasePBKDF2Iterations = this.accountSecretData.passphrasePBKDF2Iterations;
        return authenticationLiteData;
    }
}