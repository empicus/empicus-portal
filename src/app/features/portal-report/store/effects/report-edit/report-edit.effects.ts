import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/report-edit/report-edit.actions';
import { ReportEditService } from '../../../services/report-edit/report-edit.service';

@Injectable()

export class ReportEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private reportEditService: ReportEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitReportEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitReportEditRequestAction),
        map(action => of(this.reportEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitReportEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitReportEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ReportEdit Success',
                    message: 'reportEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-report/report-edit/view-report-edit/' + action.data.fieldData['code'].value,
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
