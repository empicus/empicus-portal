import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/academic-order-form/academic-order-form.actions';
import { AcademicOrderFormService } from '../../../services/academic-order-form/academic-order-form.service';

@Injectable()

export class AcademicOrderFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private academicOrderFormService: AcademicOrderFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitAcademicOrderFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitAcademicOrderFormRequestAction),
        map(action => of(this.academicOrderFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitAcademicOrderFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitAcademicOrderFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'AcademicOrderForm Success',
                    message: 'academicOrderForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-academic/academic-order-form/view-academic-order-form/' + action.data.fieldData['code'].value,
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
