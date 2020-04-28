import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { DiseaseListContainerComponent } from './components/containers/disease-list-container/disease-list-container.component';
import { DiseaseDetailsContainerComponent } from './components/containers/disease-details-container/disease-details-container.component';
import { DiseaseDetailsResolverService } from './services/disease-details/disease-details-resolver.service';
import { DiseaseEditContainerComponent } from './components/containers/disease-edit-container/disease-edit-container.component';
import { DiseaseEditResolverService } from './services/disease-edit/disease-edit-resolver.service';
import { DiseaseFormContainerComponent } from './components/containers/disease-form-container/disease-form-container.component';
import { DiseaseFormResolverService } from './services/disease-form/disease-form-resolver.service';

export const PortalDiseaseRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'diseases', pathMatch: 'full' },
            { 
                path: 'diseases', 
                component: DiseaseListContainerComponent,
            },
            { 
                path: 'view-disease/:code', 
                component: DiseaseDetailsContainerComponent, 
                resolve: { diseaseData: DiseaseDetailsResolverService }  
            },
            { 
                path: 'edit-disease/:code', 
                component: DiseaseEditContainerComponent, 
                resolve: { diseaseData: DiseaseEditResolverService }  
            },
            { 
                path: 'new-disease', 
                component: DiseaseFormContainerComponent, 
                /* resolve: { diseaseData: DiseaseFormResolverService }   */
            }
        ] 
    },
];
