import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/user-form/user-form.actions';
import { UserFormService } from '../../../services/user-form/user-form.service';

@Injectable()

export class UserFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private userFormService: UserFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitUserFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitUserFormRequestAction),
        map(action => of(this.userFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitUserFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitUserFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'UserForm Success',
                    message: 'userForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-user/user-form/view-user-form/' + action.data.fieldData['code'].value,
                                routeData: []
                            }
                        }))
                    }
                }
            }))
            return of();
        })),
        { dispatch: false }
    );
    
}
