import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { DiseaseContactListContainerComponent } from './components/containers/disease-contact-list-container/disease-contact-list-container.component';
import { DiseaseContactDetailsContainerComponent } from './components/containers/disease-contact-details-container/disease-contact-details-container.component';
import { DiseaseContactDetailsResolverService } from './services/disease-contact-details/disease-contact-details-resolver.service';
import { DiseaseContactEditContainerComponent } from './components/containers/disease-contact-edit-container/disease-contact-edit-container.component';
import { DiseaseContactEditResolverService } from './services/disease-contact-edit/disease-contact-edit-resolver.service';
import { DiseaseContactFormContainerComponent } from './components/containers/disease-contact-form-container/disease-contact-form-container.component';
import { DiseaseContactFormResolverService } from './services/disease-contact-form/disease-contact-form-resolver.service';

export const PortalDiseaseContactRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'disease-contacts', pathMatch: 'full' },
            { 
                path: 'disease-contacts', 
                component: DiseaseContactListContainerComponent,
            },
            { 
                path: 'view-disease-contact/:code', 
                component: DiseaseContactDetailsContainerComponent, 
                resolve: { diseaseContactData: DiseaseContactDetailsResolverService }  
            },
            { 
                path: 'edit-disease-contact/:code', 
                component: DiseaseContactEditContainerComponent, 
                resolve: { diseaseContactData: DiseaseContactEditResolverService }  
            },
            { 
                path: 'new-disease-contact', 
                component: DiseaseContactFormContainerComponent, 
                /* resolve: { diseaseContactData: DiseaseContactFormResolverService }   */
            }
        ] 
    },
];
