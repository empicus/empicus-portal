import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { AboutLandingContainerComponent } from './components/containers/about-landing-container/about-landing-container.component';

export const AboutRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { 
                path: 'landing', 
                component: AboutLandingContainerComponent,
            },
        ] 
    },
];
