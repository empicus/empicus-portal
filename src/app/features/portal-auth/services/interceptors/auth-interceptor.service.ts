import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { AuthModuleState, getUserAuthenticationStateSelector } from "../../store/auth-module.state";
import { AuthenticationData } from '../../data/auth/authentication.data';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    userAuthenticationData: AuthenticationData

    constructor(private store: Store<AuthModuleState>) {
        store.select(getUserAuthenticationStateSelector).subscribe((userAuthenticationData) => {
            this.userAuthenticationData = userAuthenticationData;
        });
    }

    /**
     * 
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.userAuthenticationData.isUserAuthenticated) {
            let userName = this.userAuthenticationData.userAccountData.userName;
            let tokenId = this.userAuthenticationData.userAccountData.accountTokenData.tokenId;
            console.log('AuthInterceptorService::::::::::::::::::::', this.userAuthenticationData);
            request = request.clone({ headers: request.headers.set('userName', userName) });
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + tokenId) });
        }
        return next.handle(request);
    }
}
