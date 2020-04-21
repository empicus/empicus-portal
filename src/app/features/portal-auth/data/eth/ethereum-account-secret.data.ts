import { AbstractData } from "helion-core";
import * as cryptoJs from "crypto-js";

export class EthereumAccountSecretData implements AbstractData {
    secretKey: cryptoJs.lib.WordArray;
    passphraseSalt:cryptoJs.lib.WordArray; 
    passphrasePBKDF2Iterations: number;
}