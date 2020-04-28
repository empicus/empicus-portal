import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/pathogen-form/pathogen-form.actions';
import { PathogenFormService } from '../../../services/pathogen-form/pathogen-form.service';

@Injectable()

export class PathogenFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private pathogenFormService: PathogenFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitPathogenFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPathogenFormRequestAction),
        map(action => of(this.pathogenFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitPathogenFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPathogenFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'PathogenForm Success',
                    message: 'pathogenForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-pathogen/pathogen-form/view-pathogen-form/' + action.data.fieldData['code'].value,
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
