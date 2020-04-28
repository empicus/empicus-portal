import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/report-form/report-form.actions';
import { ReportFormService } from '../../../services/report-form/report-form.service';

@Injectable()

export class ReportFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private reportFormService: ReportFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitReportFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitReportFormRequestAction),
        map(action => of(this.reportFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitReportFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitReportFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ReportForm Success',
                    message: 'reportForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-report/report-form/view-report-form/' + action.data.fieldData['code'].value,
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
