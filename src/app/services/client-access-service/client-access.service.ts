import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AESEncrytionService } from "helion-core";
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class ClientAccessInterceptorService implements HttpInterceptor {
    cipherKey = 'GEbTMwFyipsLzesc';
    accessKey = 'okW3PEuG1u7MDktxx1zescRCRSkq8L7K';
    accessKeySecret = 'sqYOYOK9oYwiGEbTMwFyipsLJDepIRCj';

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clientAccessKey = this.accessKey + ':' + this.accessKeySecret;
        request = request.clone({ headers: request.headers.set('ClientAuthorization', clientAccessKey) });
        return next.handle(request);
    }

    /**
     * 
     * @param plainText 
     * @param secretKey 
     */
    encrypt(plainText: string, secretKey: string): string {
        var key = CryptoJS.enc.Utf8.parse(secretKey);
        var iv = CryptoJS.enc.Utf8.parse(secretKey);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText.toString()), key,
            {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypted.toString();
    }

    /**
     * 
     * @param plainText 
     * @param secretKey 
     */
    decrypt(plainText: string, secretKey: string): string {
        var key = CryptoJS.enc.Utf8.parse(secretKey);
        var iv = CryptoJS.enc.Utf8.parse(secretKey);
        var decrypted = CryptoJS.AES.decrypt(plainText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
