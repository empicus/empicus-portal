import { Injectable, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { openUiNotificationAction, UiNotificationModuleState, UI_NOTIFICATION_TY_SUCCESS } from 'helion-ui-notifications';
import * as formActions from '../../actions/conversation-edit/conversation-edit.actions';
import { ConversationEditService } from '../../../services/conversation-edit/conversation-edit.service';

@Injectable()

export class ConversationEditEffects {

    constructor(
        private uiStore: Store<UiModuleState>,
        private conversationEditService: ConversationEditService,
        private uiNotificationStore: Store<UiNotificationModuleState>,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    submitConversationEditRequestEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitConversationEditRequestAction),
        map(action => of(this.conversationEditService.submit(action.data)))),
        { dispatch: false }
    );
    
    /**
     * 
     */
    submitConversationEditSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(formActions.submitConversationEditSuccessAction),
        delay(500),
        map((action) => {
            let that = this
            this.uiNotificationStore.dispatch(openUiNotificationAction({
                data: {
                    type: UI_NOTIFICATION_TY_SUCCESS,
                    title: 'ConversationEdit Success',
                    message: 'conversationEdit information action completed',
                    okAction: () => {
                        that.uiStore.dispatch(navigateToAction({
                            data: {
                                route: '/portal-conversation/conversation-edit/view-conversation-edit/' + action.data.fieldData['code'].value,
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
