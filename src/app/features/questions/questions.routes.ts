import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { QuestionsLandingContainerComponent } from './components/containers/questions-landing-container/questions-landing-container.component';

export const QuestionsRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {  
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { 
                path: 'landing', 
                component: QuestionsLandingContainerComponent,
            },
        ] 
    },
];
