import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/disease-case-edit/disease-case-edit.actions';
import { DiseaseCaseEditService } from '../../../services/disease-case-edit/disease-case-edit.service';

@Injectable()

export class DiseaseCaseEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private diseaseCaseEditService: DiseaseCaseEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitDiseaseCaseEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseCaseEditRequestAction),
        map(action => of(this.diseaseCaseEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitDiseaseCaseEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitDiseaseCaseEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'DiseaseCaseEdit Success',
                    message: 'diseaseCaseEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-disease-case/disease-case-edit/view-disease-case-edit/' + action.data.fieldData['code'].value,
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
