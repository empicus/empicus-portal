import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/academic-order-edit/academic-order-edit.actions';
import { AcademicOrderEditService } from '../../../services/academic-order-edit/academic-order-edit.service';

@Injectable()

export class AcademicOrderEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private academicOrderEditService: AcademicOrderEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitAcademicOrderEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitAcademicOrderEditRequestAction),
        map(action => of(this.academicOrderEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitAcademicOrderEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitAcademicOrderEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'AcademicOrderEdit Success',
                    message: 'academicOrderEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-academic/academic-order-edit/view-academic-order-edit/' + action.data.fieldData['code'].value,
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
