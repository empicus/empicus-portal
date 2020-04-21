
import { isDevMode } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cryptoJs from 'crypto-js';
import { AuthModuleState } from "../../store/auth-module.state";
import { EthereumAccountKeyService } from './ethereum-account-key.service';
import { StorageService } from 'helion-core';
import { Injectable } from '@angular/core';
import { EthereumAccountData } from '../../data/eth/ethereum-account.data';
import { EthereumAccountMetaData } from '../../data/eth/ethereum-account-meta.data';
import { EthereumAccountSecretData } from '../../data/eth/ethereum-account-secret.data';
import { EthereumAccountHelper } from '../../util/ethereum-account.util';

@Injectable()
export class EthereumAccountService {

    private ec: any;
    private ethereumAccountData: EthereumAccountData;

    constructor(
        private keyService: EthereumAccountKeyService, 
        private store: Store<AuthModuleState>, 
        private storageService: StorageService) 
    {
    }

    /**
     * 
     * @param passphrase 
     */
    generate(passphrase: string): EthereumAccountData {
        let ethereumAccountData = new EthereumAccountData();
        ethereumAccountData.password = passphrase;

        ethereumAccountData.accountKeyData = this.keyService.getAccountKeyData();
        ethereumAccountData.accountSecretData = this.generateSecretKeyData(passphrase);
        ethereumAccountData = this.keyService.encryptAccountKeyRoot(ethereumAccountData);
        
        if(isDevMode()) {
            EthereumAccountHelper.printAccountData(ethereumAccountData, this.keyService);
            EthereumAccountHelper.printAccountMetaData(ethereumAccountData.toAccountLiteData());
        }

        return ethereumAccountData;
    }

    /**
     * 
     * @param passphrase 
     * @param authenticationLiteData 
     */
    recover(passphrase: string, authenticationLiteData: EthereumAccountMetaData): EthereumAccountData {
        let ethereumAccountData = new EthereumAccountData();
        ethereumAccountData.secretIv = cryptoJs.enc.Hex.parse(authenticationLiteData.secretIv);
        ethereumAccountData.secretCiphertext = authenticationLiteData.secretCiphertext;

        ethereumAccountData.accountSecretData.passphraseSalt = cryptoJs.enc.Hex.parse(authenticationLiteData.passphraseSalt);
        ethereumAccountData.accountSecretData.passphrasePBKDF2Iterations = authenticationLiteData.passphrasePBKDF2Iterations;

        ethereumAccountData.accountSecretData.secretKey = this.keyService.derive(
            passphrase, 
            ethereumAccountData.accountSecretData.passphraseSalt,
            ethereumAccountData.accountSecretData.passphrasePBKDF2Iterations
        );

        let accountKeyRoot = this.keyService.decryptAccountKeyRoot(
            ethereumAccountData.secretCiphertext,
            ethereumAccountData.accountSecretData.secretKey,
            ethereumAccountData.secretIv
        );
        
        ethereumAccountData.accountKeyData.accountKeyRoot = accountKeyRoot;
        ethereumAccountData.accountKeyData.accountKeyEnc = this.keyService.getAccountKeyEnc(accountKeyRoot);
        ethereumAccountData.accountKeyData.accountKeyIdentityPrivate = this.keyService.getAccountKeyIdentityPrivate(accountKeyRoot);

        if(isDevMode()) {
            EthereumAccountHelper.printAccountData(ethereumAccountData, this.keyService);
        }
        return ethereumAccountData;
    }

    /**
     * 
     * @param data 
     */
    generateSecretKeyData(passphrase: string): EthereumAccountSecretData {
        let iterations = 1000;
        let salt = cryptoJs.lib.WordArray.random(16);
        let secretKey = this.keyService.derive(passphrase, salt, iterations);
        return {
            secretKey: secretKey,
            passphraseSalt: salt,
            passphrasePBKDF2Iterations: iterations
        }
    }

}

