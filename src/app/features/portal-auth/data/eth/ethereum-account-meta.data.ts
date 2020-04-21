export class EthereumAccountMetaData {
    userName: string;
    /**
     * Not stored on the server
     */
    password: string;
    emailAddress: string;
    tokenSignature: string;
    secretIv: string;
    secretCiphertext: string;
    passphraseSalt: string;
    passphrasePBKDF2Iterations: number;
    accountKeyIdentityPublic: string;

}