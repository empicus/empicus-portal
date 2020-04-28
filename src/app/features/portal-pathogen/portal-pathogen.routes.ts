import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { PathogenListContainerComponent } from './components/containers/pathogen-list-container/pathogen-list-container.component';
import { PathogenDetailsContainerComponent } from './components/containers/pathogen-details-container/pathogen-details-container.component';
import { PathogenDetailsResolverService } from './services/pathogen-details/pathogen-details-resolver.service';
import { PathogenEditContainerComponent } from './components/containers/pathogen-edit-container/pathogen-edit-container.component';
import { PathogenEditResolverService } from './services/pathogen-edit/pathogen-edit-resolver.service';
import { PathogenFormContainerComponent } from './components/containers/pathogen-form-container/pathogen-form-container.component';
import { PathogenFormResolverService } from './services/pathogen-form/pathogen-form-resolver.service';

export const PortalPathogenRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'pathogens', pathMatch: 'full' },
            { 
                path: 'pathogens', 
                component: PathogenListContainerComponent,
            },
            { 
                path: 'view-pathogen/:code', 
                component: PathogenDetailsContainerComponent, 
                resolve: { pathogenData: PathogenDetailsResolverService }  
            },
            { 
                path: 'edit-pathogen/:code', 
                component: PathogenEditContainerComponent, 
                resolve: { pathogenData: PathogenEditResolverService }  
            },
            { 
                path: 'new-pathogen', 
                component: PathogenFormContainerComponent, 
                /* resolve: { pathogenData: PathogenFormResolverService }   */
            }
        ] 
    },
];
