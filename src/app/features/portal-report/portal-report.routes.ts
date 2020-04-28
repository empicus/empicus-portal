import { Routes } from '@angular/router';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { ReportListContainerComponent } from './components/containers/report-list-container/report-list-container.component';
import { ReportDetailsContainerComponent } from './components/containers/report-details-container/report-details-container.component';
import { ReportDetailsResolverService } from './services/report-details/report-details-resolver.service';
import { ReportEditContainerComponent } from './components/containers/report-edit-container/report-edit-container.component';
import { ReportEditResolverService } from './services/report-edit/report-edit-resolver.service';
import { ReportFormContainerComponent } from './components/containers/report-form-container/report-form-container.component';
import { ReportFormResolverService } from './services/report-form/report-form-resolver.service';

export const PortalReportRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'reports', pathMatch: 'full' },
            { 
                path: 'reports', 
                component: ReportListContainerComponent,
            },
            { 
                path: 'view-report/:code', 
                component: ReportDetailsContainerComponent, 
                resolve: { reportData: ReportDetailsResolverService }  
            },
            { 
                path: 'edit-report/:code', 
                component: ReportEditContainerComponent, 
                resolve: { reportData: ReportEditResolverService }  
            },
            { 
                path: 'new-report', 
                component: ReportFormContainerComponent, 
                /* resolve: { reportData: ReportFormResolverService }   */
            }
        ] 
    },
];
