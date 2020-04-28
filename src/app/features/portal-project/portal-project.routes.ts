import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { ProjectListContainerComponent } from './components/containers/project-list-container/project-list-container.component';
import { ProjectDetailsContainerComponent } from './components/containers/project-details-container/project-details-container.component';
import { ProjectDetailsResolverService } from './services/project-details/project-details-resolver.service';
import { ProjectEditContainerComponent } from './components/containers/project-edit-container/project-edit-container.component';
import { ProjectEditResolverService } from './services/project-edit/project-edit-resolver.service';
import { ProjectFormContainerComponent } from './components/containers/project-form-container/project-form-container.component';
import { ProjectFormResolverService } from './services/project-form/project-form-resolver.service';

export const PortalProjectRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'projects', pathMatch: 'full' },
            { 
                path: 'projects', 
                component: ProjectListContainerComponent,
            },
            { 
                path: 'view-project/:code', 
                component: ProjectDetailsContainerComponent, 
                resolve: { projectData: ProjectDetailsResolverService }  
            },
            { 
                path: 'edit-project/:code', 
                component: ProjectEditContainerComponent, 
                resolve: { projectData: ProjectEditResolverService }  
            },
            { 
                path: 'new-project', 
                component: ProjectFormContainerComponent, 
                /* resolve: { projectData: ProjectFormResolverService }   */
            }
        ] 
    },
];
