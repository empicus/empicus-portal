import { AbstractData } from "helion-core";

export class EthereumAccountSignatureData implements AbstractData {
    tokenId: string
    tokenNonce: string;
    tokenNonceHash: string;
    tokenSignature: string;
}