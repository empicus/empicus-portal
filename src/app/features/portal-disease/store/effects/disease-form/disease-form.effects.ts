import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/disease-form/disease-form.actions';
import { DiseaseFormService } from '../../../services/disease-form/disease-form.service';

@Injectable()

export class DiseaseFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private diseaseFormService: DiseaseFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitDiseaseFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseFormRequestAction),
        map(action => of(this.diseaseFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitDiseaseFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'DiseaseForm Success',
                    message: 'diseaseForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-disease/disease-form/view-disease-form/' + action.data.fieldData['code'].value,
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
