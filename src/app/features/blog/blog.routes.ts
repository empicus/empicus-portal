import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { BlogLandingContainerComponent } from './components/containers/blog-landing-container/blog-landing-container.component';

export const BlogRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { 
                path: 'landing', 
                component: BlogLandingContainerComponent,
            },
        ] 
    },
];
