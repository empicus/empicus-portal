import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { PortalAcademicRoutingModule } from './portal-academic.routing.module';
import { AcademicOrderListContainerComponent } from './components/containers/academic-order-list-container/academic-order-list-container.component';
import { AcademicOrderFormWidgetComponent } from './components/widgets/academic-order-form-widget/academic-order-form-widget.component';
import { AcademicOrderFormContainerComponent } from './components/containers/academic-order-form-container/academic-order-form-container.component';
import { AcademicOrderEditWidgetComponent } from './components/widgets/academic-order-edit-widget/academic-order-edit-widget.component';
import { AcademicOrderEditContainerComponent } from './components/containers/academic-order-edit-container/academic-order-edit-container.component';
import { AcademicOrderDetailsWidgetComponent } from './components/widgets/academic-order-details-widget/academic-order-details-widget.component';

import { AcademicOrderListWidgetComponent } from './components/widgets/academic-order-list-widget/academic-order-list-widget.component';

import { AcademicOrderDetailsContainerComponent } from './components/containers/academic-order-details-container/academic-order-details-container.component';
import { AcademicOrderFormEffects } from './store/effects/academic-order-form/academic-order-form.effects';
import { AcademicOrderEditEffects } from './store/effects/academic-order-edit/academic-order-edit.effects';
import { academicOrderFormReducer } from './store/reducers/academic-order-form/academic-order-form.reducer';
import { academicOrderEditReducer } from './store/reducers/academic-order-edit/academic-order-edit.reducer';
import { AcademicOrderListResolverService } from "./services/academic-order-list/academic-order-list-resolver.service";
import { PortalAuthModule } from '../portal-auth/portal-auth.module';

@NgModule({
    declarations: [
        AcademicOrderListContainerComponent,
        AcademicOrderFormWidgetComponent,
        AcademicOrderFormContainerComponent,
        AcademicOrderEditWidgetComponent,
        AcademicOrderEditContainerComponent,
        AcademicOrderDetailsWidgetComponent,
        AcademicOrderDetailsContainerComponent,
        AcademicOrderListWidgetComponent
    ],
    imports: [
        CommonModule,
        PortalAcademicRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalAuthModule,
        PortalSharedModule,
        StoreModule.forFeature('academic-orderFormStateReducer', [
            academicOrderFormReducer,
            academicOrderEditReducer
        ]),
        EffectsModule.forFeature([
            AcademicOrderFormEffects,
            AcademicOrderEditEffects
        ]),
    ],
    exports: [
        AcademicOrderListContainerComponent,
        AcademicOrderFormWidgetComponent,
        AcademicOrderFormContainerComponent,
        AcademicOrderEditWidgetComponent,
        AcademicOrderEditContainerComponent,
        AcademicOrderDetailsWidgetComponent,
        AcademicOrderDetailsContainerComponent
    ],
    providers: [
        AcademicOrderListResolverService
    ]
})
export class PortalAcademicModule { }
