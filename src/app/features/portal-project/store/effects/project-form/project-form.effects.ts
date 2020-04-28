import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/project-form/project-form.actions';
import { ProjectFormService } from '../../../services/project-form/project-form.service';

@Injectable()

export class ProjectFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private projectFormService: ProjectFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitProjectFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitProjectFormRequestAction),
        map(action => of(this.projectFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitProjectFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitProjectFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ProjectForm Success',
                    message: 'projectForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-project/project-form/view-project-form/' + action.data.fieldData['code'].value,
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
