import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { utils } from 'ethers';
import * as cryptoJs from 'crypto-js';
import { AuthModuleState } from "../../store/auth-module.state";
import { EthereumAccountData } from '../../data/eth/ethereum-account.data';
import { EthereumAccountKeyData } from '../../data/eth/ethereum-account-key.data';

@Injectable()
export class EthereumAccountKeyService {

    constructor(private store: Store<AuthModuleState>) {
    }

    /**
     * 
     * @param signinData 
     * @param accountKeyData 
     * @param accountSecretData 
     */
    encryptAccountKeyRoot(authenticationData: EthereumAccountData): EthereumAccountData {
        let secretIv = cryptoJs.lib.WordArray.random(16);
        let secretKey = authenticationData.accountSecretData.secretKey;
        let accountKeyRoot = authenticationData.accountKeyData.accountKeyRoot;
        authenticationData.secretIv = secretIv;
        authenticationData.secretCiphertext = cryptoJs.AES.encrypt(accountKeyRoot, secretKey, { iv: secretIv });
        return authenticationData;
    }


    /**
     * 
     * @param accountKeyRoot 
     * @param secretKey 
     * @param secretIv 
     */
    decryptAccountKeyRoot(accountKeyRoot: cryptoJs.lib.WordArray, secretKey: cryptoJs.lib.WordArray, secretIv: cryptoJs.lib.WordArray): cryptoJs.lib.WordArray {
        return cryptoJs.AES.decrypt(accountKeyRoot, secretKey, { iv: secretIv });
    }

    /**
     * 
     */
    getAccountKeyData(): EthereumAccountKeyData {

        let accountKeyData = new EthereumAccountKeyData();
        let accountKeyRoot = utils.HDNode.entropyToMnemonic(utils.randomBytes(32));
        accountKeyData.accountKeyRoot = cryptoJs.enc.Utf16.parse(accountKeyRoot);
        accountKeyData.accountKeyIdentityPrivate = this.getAccountKeyIdentityPrivate(accountKeyRoot);
        accountKeyData.accountKeyEnc = this.getAccountKeyEnc(accountKeyRoot);
        
        return accountKeyData;
    }
    
    /**
     * 
     * @param accountKeyRoot 
     */
    getAccountKeyIdentityPrivate(accountKeyRoot: string): cryptoJs.lib.WordArray {
        let accountKeyIdentityPrivate = cryptoJs.enc.Utf16.parse(accountKeyRoot + ' Identity');
        let accountKeyIdentityPrivateHash = cryptoJs.SHA256(accountKeyIdentityPrivate);
        return accountKeyIdentityPrivateHash;
    }

    /**
     * 
     * @param accountKeyRoot 
     */
    getAccountKeyEnc(accountKeyRoot: string): cryptoJs.lib.WordArray {
        let accountKeyEnc = cryptoJs.enc.Utf16.parse(accountKeyRoot + ' End');
        let accountKeyEncHash = cryptoJs.SHA256(accountKeyEnc);
        return accountKeyEncHash;
    }

    /**
     * 
     * @param password 
     * @param salt 
     * @param iterations 
     */
    derive(password: string, salt: cryptoJs.lib.WordArray, iterations: number): string {
        return cryptoJs.PBKDF2(password, salt, { keySize: 512/32, iterations: iterations }).toString();
    }
}

