import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { LoginService } from '../../services/auth/login.service';
import * as formActions from '../actions/authentication/authentication.actions';

@Injectable()

export class LoginEffects {

    constructor(
        private actions$: Actions,
        private authenticationService: LoginService) { }

    /**
     * 
     */
    submitLoginRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitLoginRequestAction),
        map(action => of(this.authenticationService.login(action.data)))),
        { dispatch: false }
    );

    /**
     * 
     */
    submitLoginRequestSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitLoginRequestSuccessAction),
        map(action => of(this.authenticationService.onLoginSuccess(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitLoginRequestFailureEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitLoginRequestFailureAction),
        map(action => of(this.authenticationService.onLoginFailure(action.data)))),
        { dispatch: false }
    );

    /**
     * 
     */
    submitLogoutRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitLogoutRequestAction),
        map(action => of(this.authenticationService.logout(action.authenticationData)))),
        { dispatch: false }
    );

    /**
     * 
     */
    submitLogoutRequestSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitLogoutRequestSuccessAction),
        map(action => of(this.authenticationService.onLogoutSuccess(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitLogoutRequestFailureEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitLogoutRequestFailureAction),
        map(action => of(this.authenticationService.onLogoutFailure(action.data)))),
        { dispatch: false }
    );
}
