import { AbstractData } from "helion-core";
import * as cryptoJs from "crypto-js";

export class EthereumAccountKeyData implements AbstractData {

    accountKeyRoot: cryptoJs.lib.WordArray;
    accountKeyIdentityPrivate: cryptoJs.lib.WordArray;
    accountKeyIdentityPublic: cryptoJs.lib.WordArray;
    accountKeyEnc: cryptoJs.lib.WordArray;

}