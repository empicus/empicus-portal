import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthModuleState } from '../auth-module.state';
import * as formActions from '../actions/authentication/authentication.actions';
import { ResetPasswordService } from '../../services/auth/reset-password.service';

@Injectable()

export class ResetPasswordEffects {

    constructor(
        private actions$: Actions,
        private authStore: Store<AuthModuleState>,
        private authenticationService: ResetPasswordService) { }

    /**
     * 
     */
    submitResetPasswordRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitResetPasswordRequestAction),
        map(action => of(this.authenticationService.resetPassword(action.data)))),
        { dispatch: false }
    );
    /**
     * 
     */
    submitResetPasswordRequestSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitResetPasswordRequestSuccessAction),
        map(action => of(this.authenticationService.onResetPasswordRequestSuccess(action.data)))),
        { dispatch: false }
    );

    /**
     * 
     */
    submitResetPasswordRequestFailureEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitResetPasswordRequestFailureAction),
        map(action => of(this.authenticationService.onResetPasswordRequestFailure(action.data)))),
        { dispatch: false }
    );


    /**
     * 
     */
    submitResetPasswordTokenRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitResetPasswordRequestAction),
        map(action => of(this.authenticationService.requestResetToken(action.data)))),
        { dispatch: false }
    );
    /**
     * 
     */
    submitResetPasswordTokenRequestSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitResetPasswordTokenRequestSuccessAction),
        map(action => of(this.authenticationService.onRequestResetTokenRequestSuccess(action.data)))),
        { dispatch: false }
    );

    /**
     * 
     */
    submitResetPasswordTokenRequestFailureEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitResetPasswordTokenRequestFailureAction),
        map(action => of(this.authenticationService.onRequestResetTokenRequestFailure(action.data)))),
        { dispatch: false }
    );
    
}
