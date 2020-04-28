import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/project-edit/project-edit.actions';
import { ProjectEditService } from '../../../services/project-edit/project-edit.service';

@Injectable()

export class ProjectEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private projectEditService: ProjectEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitProjectEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitProjectEditRequestAction),
        map(action => of(this.projectEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitProjectEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitProjectEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ProjectEdit Success',
                    message: 'projectEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-project/project-edit/view-project-edit/' + action.data.fieldData['code'].value,
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
