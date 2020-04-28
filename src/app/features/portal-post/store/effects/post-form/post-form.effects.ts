import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/post-form/post-form.actions';
import { PostFormService } from '../../../services/post-form/post-form.service';

@Injectable()

export class PostFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private postFormService: PostFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitPostFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPostFormRequestAction),
        map(action => of(this.postFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitPostFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPostFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'PostForm Success',
                    message: 'postForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-post/post-form/view-post-form/' + action.data.fieldData['code'].value,
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
