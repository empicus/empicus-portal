import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { PortalLandingContainerComponent } from '../portal-shared/components/containers/portal-landing-container/portal-landing-container.component';
import { PostDetailsContainerComponent } from '../portal-shared/components/containers/post-details-container/post-details-container.component';

export const PortalRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { 
                path: 'landing', 
                component: PortalLandingContainerComponent,
            },
            { 
                path: 'details', 
                component: PostDetailsContainerComponent,
            },
        ] 
    },
];
