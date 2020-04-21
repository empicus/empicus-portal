import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/content-order-edit/content-order-edit.actions';
import { ContentOrderEditService } from '../../../services/content-order-edit/content-order-edit.service';

@Injectable()

export class ContentOrderEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private contentOrderEditService: ContentOrderEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitContentOrderEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitContentOrderEditRequestAction),
        map(action => of(this.contentOrderEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitContentOrderEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitContentOrderEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ContentOrderEdit Success',
                    message: 'contentOrderEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-content/content-order-edit/view-content-order-edit/' + action.data.fieldData['code'].value,
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
