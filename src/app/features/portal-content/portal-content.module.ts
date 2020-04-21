import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { PortalContentRoutingModule } from './portal-content.routing.module';
import { ContentOrderListContainerComponent } from './components/containers/content-order-list-container/content-order-list-container.component';
import { ContentOrderFormWidgetComponent } from './components/widgets/content-order-form-widget/content-order-form-widget.component';
import { ContentOrderFormContainerComponent } from './components/containers/content-order-form-container/content-order-form-container.component';
import { ContentOrderEditWidgetComponent } from './components/widgets/content-order-edit-widget/content-order-edit-widget.component';
import { ContentOrderEditContainerComponent } from './components/containers/content-order-edit-container/content-order-edit-container.component';
import { ContentOrderDetailsWidgetComponent } from './components/widgets/content-order-details-widget/content-order-details-widget.component';
import { ContentOrderDetailsContainerComponent } from './components/containers/content-order-details-container/content-order-details-container.component';
import { ContentOrderFormEffects } from './store/effects/content-order-form/content-order-form.effects';
import { ContentOrderEditEffects } from './store/effects/content-order-edit/content-order-edit.effects';
import { contentOrderFormReducer } from './store/reducers/content-order-form/content-order-form.reducer';
import { contentOrderEditReducer } from './store/reducers/content-order-edit/content-order-edit.reducer';

@NgModule({
    declarations: [
        ContentOrderListContainerComponent,
        ContentOrderFormWidgetComponent,
        ContentOrderFormContainerComponent,
        ContentOrderEditWidgetComponent,
        ContentOrderEditContainerComponent,
        ContentOrderDetailsWidgetComponent,
        ContentOrderDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalContentRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalSharedModule,
        StoreModule.forFeature('content-orderFormStateReducer', [
            contentOrderFormReducer,
            contentOrderEditReducer
        ]),
        EffectsModule.forFeature([
            ContentOrderFormEffects,
            ContentOrderEditEffects
        ]),
    ],
    exports: [
        ContentOrderListContainerComponent,
        ContentOrderFormWidgetComponent,
        ContentOrderFormContainerComponent,
        ContentOrderEditWidgetComponent,
        ContentOrderEditContainerComponent,
        ContentOrderDetailsWidgetComponent,
        ContentOrderDetailsContainerComponent
    ]
})
export class PortalContentModule { }
