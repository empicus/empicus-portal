import { Routes } from '@angular/router';
import { PostListContainerComponent } from './components/containers/post-list-container/post-list-container.component';
import { PostDetailsContainerComponent } from './components/containers/post-details-container/post-details-container.component';
import { PostDetailsResolverService } from './services/post-details/post-details-resolver.service';
import { PostEditContainerComponent } from './components/containers/post-edit-container/post-edit-container.component';
import { PostEditResolverService } from './services/post-edit/post-edit-resolver.service';
import { PostFormContainerComponent } from './components/containers/post-form-container/post-form-container.component';
import { PostFormResolverService } from './services/post-form/post-form-resolver.service';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';

export const PortalPostRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'posts', pathMatch: 'full' },
            { 
                path: 'posts', 
                component: PostListContainerComponent,
            },
            { 
                path: 'view-post/:code', 
                component: PostDetailsContainerComponent, 
                resolve: { postData: PostDetailsResolverService }  
            },
            { 
                path: 'edit-post/:code', 
                component: PostEditContainerComponent, 
                resolve: { postData: PostEditResolverService }  
            },
            { 
                path: 'new-post', 
                component: PostFormContainerComponent, 
                /* resolve: { postData: PostFormResolverService }   */
            }
        ] 
    },
];
