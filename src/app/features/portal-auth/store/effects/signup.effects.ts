import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthModuleState } from '../auth-module.state';
import { SignupService } from '../../services/auth/signup.service';
import * as fromAuthActions from '../actions/authentication/authentication.actions';

@Injectable()

export class SignupEffects {
    
    constructor(
        private actions$: Actions,
        private authenticationService: SignupService) { }

    /**
     * 
     */
    submitSignupRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthActions.submitSignupRequestAction),
        map(action => of(this.authenticationService.signup(action.data)))),
        { dispatch: false }
    );


    /**
     * 
     */
    submitSignupRequestSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthActions.submitSignupRequestSuccessAction),
        map(action => of(this.authenticationService.onSignupRequestSuccess(action.data)))),
        { dispatch: false }
    );

    /**
     * 
     */
    submitSignupRequestFailureEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthActions.submitSignupRequestFailureAction),
        map(action => of(this.authenticationService.onSignupRequestFailure(action.data)))),
        { dispatch: false }
    );
    
}
