import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/disease-contact-form/disease-contact-form.actions';
import { DiseaseContactFormService } from '../../../services/disease-contact-form/disease-contact-form.service';

@Injectable()

export class DiseaseContactFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private diseaseContactFormService: DiseaseContactFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitDiseaseContactFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseContactFormRequestAction),
        map(action => of(this.diseaseContactFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitDiseaseContactFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseContactFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'DiseaseContactForm Success',
                    message: 'diseaseContactForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-disease-contact/disease-contact-form/view-disease-contact-form/' + action.data.fieldData['code'].value,
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
