import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/disease-contact-edit/disease-contact-edit.actions';
import { DiseaseContactEditService } from '../../../services/disease-contact-edit/disease-contact-edit.service';

@Injectable()

export class DiseaseContactEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private diseaseContactEditService: DiseaseContactEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitDiseaseContactEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseContactEditRequestAction),
        map(action => of(this.diseaseContactEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitDiseaseContactEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseContactEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'DiseaseContactEdit Success',
                    message: 'diseaseContactEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-disease-contact/disease-contact-edit/view-disease-contact-edit/' + action.data.fieldData['code'].value,
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
