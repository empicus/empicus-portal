
import { ethers, utils } from "ethers";

import * as cryptoJs from 'crypto-js';
import { EthereumAccountMetaData } from '../data/eth/ethereum-account-meta.data';
import { EthereumAccountKeyService } from '../services/ethereum/ethereum-account-key.service';


declare var require: any

let EC = require('elliptic').ec;
let ec = new EC('secp256k1');

export class EthereumAccountHelper {



    static printAccountData(authenticationData, keyService: EthereumAccountKeyService) {
        let wallet = new ethers.Wallet(authenticationData.accountKeyData.accountKeyIdentityPrivate.toString());
        let ellipticKey = ec.keyFromPrivate(authenticationData.accountKeyData.accountKeyIdentityPrivate.toString())

        console.log('***********************************')
        console.log('********   ACCOUNT  DATA   ********')
        console.log('***********************************')
        console.log('userName', authenticationData.userName)
        console.log('passphrase', authenticationData.password)
        console.log('passphraseSalt', authenticationData.accountSecretData.passphraseSalt.toString())
        console.log('passphrasePBKDF2Iterations', authenticationData.accountSecretData.passphrasePBKDF2Iterations.toString())
        console.log('accountKeyRoot', cryptoJs.enc.Utf16.stringify(authenticationData.accountKeyData.accountKeyRoot))
        console.log('accountKeyIdentityPrivate', authenticationData.accountKeyData.accountKeyIdentityPrivate.toString())
        console.log('accountKeyIdentityEnc', authenticationData.accountKeyData.accountKeyEnc.toString())
        console.log('accountKeyIdentityPublic', utils.computePublicKey('0x' + authenticationData.accountKeyData.accountKeyIdentityPrivate.toString()))
        console.log('ellipticKeyIdentityPublic', ellipticKey.getPublic().encode('hex'))
        console.log('secretCiphertext', authenticationData.secretCiphertext.toString());
        console.log('secretIv', authenticationData.secretIv.toString())

        let decryptedCipherText = keyService.decryptAccountKeyRoot(
            authenticationData.secretCiphertext,
            authenticationData.accountSecretData.secretKey,
            authenticationData.secretIv
        );
        console.log('decryptedCipherText', cryptoJs.enc.Utf16.stringify(decryptedCipherText));
        /* console.log('tokenId', authenticationData.accountTokenData.tokenId)
        console.log('tokenNonce', authenticationData.accountTokenData.tokenNonce)
        console.log('tokenNonceHash', authenticationData.accountTokenData.tokenNonceHash) */
    }


    static printAccountMetaData(data: EthereumAccountMetaData) {
        console.log('***********************************')
        console.log('******** ACCOUNT META DATA ********')
        console.log('***********************************')
        console.log('userName =   ', data.userName)
        console.log('secretIv =   ', data.secretIv)
        console.log('passphraseSalt =   ', data.passphraseSalt)
        console.log('passphrasePBKDF2Iterations =   ', data.passphrasePBKDF2Iterations)
        console.log('secretCiphertext =  ', data.secretCiphertext)
    }
}