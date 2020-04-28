import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { ConversationListContainerComponent } from './components/containers/conversation-list-container/conversation-list-container.component';
import { ConversationDetailsContainerComponent } from './components/containers/conversation-details-container/conversation-details-container.component';
import { ConversationDetailsResolverService } from './services/conversation-details/conversation-details-resolver.service';
import { ConversationEditContainerComponent } from './components/containers/conversation-edit-container/conversation-edit-container.component';
import { ConversationEditResolverService } from './services/conversation-edit/conversation-edit-resolver.service';
import { ConversationFormContainerComponent } from './components/containers/conversation-form-container/conversation-form-container.component';
import { ConversationFormResolverService } from './services/conversation-form/conversation-form-resolver.service';

export const PortalConversationRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'conversations', pathMatch: 'full' },
            { 
                path: 'conversations', 
                component: ConversationListContainerComponent,
            },
            { 
                path: 'view-conversation/:code', 
                component: ConversationDetailsContainerComponent, 
                resolve: { conversationData: ConversationDetailsResolverService }  
            },
            { 
                path: 'edit-conversation/:code', 
                component: ConversationEditContainerComponent, 
                resolve: { conversationData: ConversationEditResolverService }  
            },
            { 
                path: 'new-conversation', 
                component: ConversationFormContainerComponent, 
                /* resolve: { conversationData: ConversationFormResolverService }   */
            }
        ] 
    },
];
