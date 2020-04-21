import { Routes } from '@angular/router';
import { AcademicOrderDetailsContainerComponent } from './components/containers/academic-order-details-container/academic-order-details-container.component';
import { AcademicOrderDetailsResolverService } from './services/academic-order-details/academic-order-details-resolver.service';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';
import { AcademicOrderListResolverService } from './services/academic-order-list/academic-order-list-resolver.service';
import { AcademicOrderListContainerComponent } from './components/containers/academic-order-list-container/academic-order-list-container.component';
import { LoginGuardService } from '../portal-auth/services/guards/login-guard.service';

export const PortalAcademicRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'pending', pathMatch: 'full' },
            { 
                path: 'view-academic-order/:code', 
                component: AcademicOrderDetailsContainerComponent,  
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderData: AcademicOrderDetailsResolverService }  
            },
            { 
                path: 'pending', 
                data : { 
                    text: 'Pending',
                    statusCode: 'pending',
                },
                component: AcademicOrderListContainerComponent, 
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderList: AcademicOrderListResolverService } 
            },
            { 
                path: 'inprogress', 
                data : { 
                    text: 'In Progress',
                    statusCode: 'in_progress', 
                },
                component: AcademicOrderListContainerComponent, 
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderList: AcademicOrderListResolverService } 
            },
            { 
                path: 'completed', 
                data : { 
                    text: 'Completed',
                    statusCode: 'completed', 
                },
                component: AcademicOrderListContainerComponent, 
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderList: AcademicOrderListResolverService } 
            },
            { 
                path: 'revision', 
                data : { 
                    text: 'Revision',
                    statusCode: 'revision',
                },
                component: AcademicOrderListContainerComponent, 
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderList: AcademicOrderListResolverService } 
            },
            { 
                path: 'disputed', 
                data : {  
                    text: 'Disputed',
                    statusCode: 'disputed',
                },
                component: AcademicOrderListContainerComponent, 
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderList: AcademicOrderListResolverService } 
            },
            { 
                path: 'archived', 
                data : { 
                    text: 'Archived',
                    statusCode: 'archived',
                },
                component: AcademicOrderListContainerComponent, 
                canActivate: [ LoginGuardService ], 
                resolve: { academicOrderList: AcademicOrderListResolverService } 
            }
        ] 
    },
];
