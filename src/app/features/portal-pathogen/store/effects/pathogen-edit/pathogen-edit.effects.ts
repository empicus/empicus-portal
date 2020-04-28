import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/pathogen-edit/pathogen-edit.actions';
import { PathogenEditService } from '../../../services/pathogen-edit/pathogen-edit.service';

@Injectable()

export class PathogenEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private pathogenEditService: PathogenEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitPathogenEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPathogenEditRequestAction),
        map(action => of(this.pathogenEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitPathogenEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPathogenEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'PathogenEdit Success',
                    message: 'pathogenEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-pathogen/pathogen-edit/view-pathogen-edit/' + action.data.fieldData['code'].value,
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
