import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { ContactLandingContainerComponent } from './components/containers/contact-landing-container/contact-landing-container.component';

export const ContactRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { 
                path: 'landing', 
                component: ContactLandingContainerComponent,
            },
        ] 
    },
];
