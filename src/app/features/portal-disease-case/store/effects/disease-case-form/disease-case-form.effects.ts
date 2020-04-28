import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/disease-case-form/disease-case-form.actions';
import { DiseaseCaseFormService } from '../../../services/disease-case-form/disease-case-form.service';

@Injectable()

export class DiseaseCaseFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private diseaseCaseFormService: DiseaseCaseFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitDiseaseCaseFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseCaseFormRequestAction),
        map(action => of(this.diseaseCaseFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitDiseaseCaseFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseCaseFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'DiseaseCaseForm Success',
                    message: 'diseaseCaseForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-disease-case/disease-case-form/view-disease-case-form/' + action.data.fieldData['code'].value,
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
