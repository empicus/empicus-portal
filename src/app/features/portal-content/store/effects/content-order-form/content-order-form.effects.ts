import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/content-order-form/content-order-form.actions';
import { ContentOrderFormService } from '../../../services/content-order-form/content-order-form.service';

@Injectable()

export class ContentOrderFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private contentOrderFormService: ContentOrderFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitContentOrderFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitContentOrderFormRequestAction),
        map(action => of(this.contentOrderFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitContentOrderFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitContentOrderFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ContentOrderForm Success',
                    message: 'contentOrderForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-content/content-order-form/view-content-order-form/' + action.data.fieldData['code'].value,
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
