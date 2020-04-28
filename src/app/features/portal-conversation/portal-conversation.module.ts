import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalConversationRoutingModule } from './portal-conversation.routing.module';
import { ConversationListContainerComponent } from './components/containers/conversation-list-container/conversation-list-container.component';
import { ConversationFormWidgetComponent } from './components/widgets/conversation-form-widget/conversation-form-widget.component';
import { ConversationFormContainerComponent } from './components/containers/conversation-form-container/conversation-form-container.component';
import { ConversationEditWidgetComponent } from './components/widgets/conversation-edit-widget/conversation-edit-widget.component';
import { ConversationEditContainerComponent } from './components/containers/conversation-edit-container/conversation-edit-container.component';
import { ConversationDetailsWidgetComponent } from './components/widgets/conversation-details-widget/conversation-details-widget.component';
import { ConversationDetailsContainerComponent } from './components/containers/conversation-details-container/conversation-details-container.component';
import { ConversationFormEffects } from './store/effects/conversation-form/conversation-form.effects';
import { ConversationEditEffects } from './store/effects/conversation-edit/conversation-edit.effects';
import { conversationFormReducer } from './store/reducers/conversation-form/conversation-form.reducer';
import { conversationEditReducer } from './store/reducers/conversation-edit/conversation-edit.reducer';

@NgModule({
    declarations: [
        ConversationListContainerComponent,
        ConversationFormWidgetComponent,
        ConversationFormContainerComponent,
        ConversationEditWidgetComponent,
        ConversationEditContainerComponent,
        ConversationDetailsWidgetComponent,
        ConversationDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalConversationRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('conversationFormStateReducer', [
            conversationFormReducer,
            conversationEditReducer
        ]),
        EffectsModule.forFeature([
            ConversationFormEffects,
            ConversationEditEffects
        ]),
    ],
    exports: [
        ConversationListContainerComponent,
        ConversationFormWidgetComponent,
        ConversationFormContainerComponent,
        ConversationEditWidgetComponent,
        ConversationEditContainerComponent,
        ConversationDetailsWidgetComponent,
        ConversationDetailsContainerComponent
    ]
})
export class PortalConversationModule { }
