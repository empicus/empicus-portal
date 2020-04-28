import { Routes } from '@angular/router';
import { TopicListContainerComponent } from './components/containers/topic-list-container/topic-list-container.component';
import { TopicDetailsContainerComponent } from './components/containers/topic-details-container/topic-details-container.component';
import { TopicDetailsResolverService } from './services/topic-details/topic-details-resolver.service';
import { TopicEditContainerComponent } from './components/containers/topic-edit-container/topic-edit-container.component';
import { TopicEditResolverService } from './services/topic-edit/topic-edit-resolver.service';
import { TopicFormContainerComponent } from './components/containers/topic-form-container/topic-form-container.component';
import { TopicFormResolverService } from './services/topic-form/topic-form-resolver.service';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';

export const PortalTopicRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'topics', pathMatch: 'full' },
            { 
                path: 'topics', 
                component: TopicListContainerComponent,
            },
            { 
                path: 'view-topic/:code', 
                component: TopicDetailsContainerComponent, 
                resolve: { topicData: TopicDetailsResolverService }  
            },
            { 
                path: 'edit-topic/:code', 
                component: TopicEditContainerComponent, 
                resolve: { topicData: TopicEditResolverService }  
            },
            { 
                path: 'new-topic', 
                component: TopicFormContainerComponent, 
                /* resolve: { topicData: TopicFormResolverService }   */
            }
        ] 
    },
];
