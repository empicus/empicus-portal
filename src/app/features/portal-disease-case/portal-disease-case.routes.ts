import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { DiseaseCaseListContainerComponent } from './components/containers/disease-case-list-container/disease-case-list-container.component';
import { DiseaseCaseDetailsContainerComponent } from './components/containers/disease-case-details-container/disease-case-details-container.component';
import { DiseaseCaseDetailsResolverService } from './services/disease-case-details/disease-case-details-resolver.service';
import { DiseaseCaseEditContainerComponent } from './components/containers/disease-case-edit-container/disease-case-edit-container.component';
import { DiseaseCaseEditResolverService } from './services/disease-case-edit/disease-case-edit-resolver.service';
import { DiseaseCaseFormContainerComponent } from './components/containers/disease-case-form-container/disease-case-form-container.component';
import { DiseaseCaseFormResolverService } from './services/disease-case-form/disease-case-form-resolver.service';

export const PortalDiseaseCaseRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'disease-cases', pathMatch: 'full' },
            { 
                path: 'disease-cases', 
                component: DiseaseCaseListContainerComponent,
            },
            { 
                path: 'view-disease-case/:code', 
                component: DiseaseCaseDetailsContainerComponent, 
                resolve: { diseaseCaseData: DiseaseCaseDetailsResolverService }  
            },
            { 
                path: 'edit-disease-case/:code', 
                component: DiseaseCaseEditContainerComponent, 
                resolve: { diseaseCaseData: DiseaseCaseEditResolverService }  
            },
            { 
                path: 'new-disease-case', 
                component: DiseaseCaseFormContainerComponent, 
                /* resolve: { diseaseCaseData: DiseaseCaseFormResolverService }   */
            }
        ] 
    },
];
