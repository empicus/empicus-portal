import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/topic-edit/topic-edit.actions';
import { TopicEditService } from '../../../services/topic-edit/topic-edit.service';

@Injectable()

export class TopicEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private topicEditService: TopicEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitTopicEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitTopicEditRequestAction),
        map(action => of(this.topicEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitTopicEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitTopicEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'TopicEdit Success',
                    message: 'topicEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-topic/topic-edit/view-topic-edit/' + action.data.fieldData['code'].value,
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
