import { Routes } from '@angular/router';
import { HomeViewComponent } from './components/views/home-view/home-view.component';
import { HomeLandingContainerComponent } from './components/containers/home-landing-container/home-landing-container.component';

export const HomeRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: HomeViewComponent, 
        children: [
            { path: '', redirectTo: 'landing', pathMatch: 'full' },
            { 
                path: 'landing', 
                component: HomeLandingContainerComponent,
            }
        ] 
    },
];
