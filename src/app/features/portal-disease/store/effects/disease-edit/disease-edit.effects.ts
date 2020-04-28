import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/disease-edit/disease-edit.actions';
import { DiseaseEditService } from '../../../services/disease-edit/disease-edit.service';

@Injectable()

export class DiseaseEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private diseaseEditService: DiseaseEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitDiseaseEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseEditRequestAction),
        map(action => of(this.diseaseEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitDiseaseEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'DiseaseEdit Success',
                    message: 'diseaseEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-disease/disease-edit/view-disease-edit/' + action.data.fieldData['code'].value,
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
