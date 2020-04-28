import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { UserListContainerComponent } from './components/containers/user-list-container/user-list-container.component';
import { UserDetailsContainerComponent } from './components/containers/user-details-container/user-details-container.component';
import { UserDetailsResolverService } from './services/user-details/user-details-resolver.service';
import { UserEditContainerComponent } from './components/containers/user-edit-container/user-edit-container.component';
import { UserEditResolverService } from './services/user-edit/user-edit-resolver.service';
import { UserFormContainerComponent } from './components/containers/user-form-container/user-form-container.component';
import { UserFormResolverService } from './services/user-form/user-form-resolver.service';

export const PortalUserRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { 
                path: 'users', 
                component: UserListContainerComponent,
            },
            { 
                path: 'view-user/:code', 
                component: UserDetailsContainerComponent, 
                resolve: { userData: UserDetailsResolverService }  
            },
            { 
                path: 'edit-user/:code', 
                component: UserEditContainerComponent, 
                resolve: { userData: UserEditResolverService }  
            },
            { 
                path: 'new-user', 
                component: UserFormContainerComponent, 
                /* resolve: { userData: UserFormResolverService }   */
            }
        ] 
    },
];
