import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ClientUrlService {
    writingPlatformHost='api.brainboxessays.com';
    //writingPlatformHost='localhost'
    andromedaUrl = 'https://' + this.writingPlatformHost + '/ws/andromeda/';
    andromedaAuthUrl = 'https://' + this.writingPlatformHost + '/ws/auth/';
    andromedaUploadUrl = 'https://' + this.writingPlatformHost + '/ws/andromeda-upload/upload';

    /**
     * 
     * @param url 
     */
    getAndromedaURL(): string {
        return this.andromedaUrl;
    }

    /**
     * 
     * @param url 
     */
    getAndromedaUploadURL(): string {
        return this.andromedaUploadUrl;
    }

    /**
     * 
     * @param url 
     */
    getAndromedaAuthURL(): string {
        return this.andromedaAuthUrl;
    }
}
