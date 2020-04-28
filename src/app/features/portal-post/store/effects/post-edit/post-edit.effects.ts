import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/post-edit/post-edit.actions';
import { PostEditService } from '../../../services/post-edit/post-edit.service';

@Injectable()

export class PostEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private postEditService: PostEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitPostEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPostEditRequestAction),
        map(action => of(this.postEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitPostEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitPostEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'PostEdit Success',
                    message: 'postEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-post/post-edit/view-post-edit/' + action.data.fieldData['code'].value,
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
