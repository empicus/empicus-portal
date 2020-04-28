import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/conversation-form/conversation-form.actions';
import { ConversationFormService } from '../../../services/conversation-form/conversation-form.service';

@Injectable()

export class ConversationFormEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private conversationFormService: ConversationFormService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitConversationFormRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitConversationFormRequestAction),
        map(action => of(this.conversationFormService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitConversationFormSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitConversationFormSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ConversationForm Success',
                    message: 'conversationForm information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-conversation/conversation-form/view-conversation-form/' + action.data.fieldData['code'].value,
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
