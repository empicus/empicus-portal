import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/topic-form/topic-form.actions';
import { TopicFormService } from '../../../services/topic-form/topic-form.service';

@Injectable()

export class TopicFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private topicFormService: TopicFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitTopicFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitTopicFormRequestAction),
        map(action => of(this.topicFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitTopicFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitTopicFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'TopicForm Success',
                    message: 'topicForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-topic/topic-form/view-topic-form/' + action.data.fieldData['code'].value,
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
