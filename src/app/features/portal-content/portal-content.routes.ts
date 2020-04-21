import { Routes } from '@angular/router';
import { ContentOrderListContainerComponent } from './components/containers/content-order-list-container/content-order-list-container.component';
import { ContentOrderDetailsContainerComponent } from './components/containers/content-order-details-container/content-order-details-container.component';
import { ContentOrderDetailsResolverService } from './services/content-order-details/content-order-details-resolver.service';
import { ContentOrderEditContainerComponent } from './components/containers/content-order-edit-container/content-order-edit-container.component';
import { ContentOrderEditResolverService } from './services/content-order-edit/content-order-edit-resolver.service';
import { ContentOrderFormContainerComponent } from './components/containers/content-order-form-container/content-order-form-container.component';
import { ContentOrderFormResolverService } from './services/content-order-form/content-order-form-resolver.service';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';

export const PortalContentRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '', component: PortalViewComponent, 
        children: [
            { path: '', redirectTo: 'content-orders', pathMatch: 'full' },
            { 
                path: 'content-orders', 
                component: ContentOrderListContainerComponent,
            },
            { 
                path: 'view-content-order/:code', 
                component: ContentOrderDetailsContainerComponent, 
                resolve: { contentOrderData: ContentOrderDetailsResolverService }  
            },
            { 
                path: 'edit-content-order/:code', 
                component: ContentOrderEditContainerComponent, 
                resolve: { contentOrderData: ContentOrderEditResolverService }  
            },
            { 
                path: 'new-content-order', 
                component: ContentOrderFormContainerComponent, 
                /* resolve: { contentOrderData: ContentOrderFormResolverService }   */
            }
        ] 
    },
];
