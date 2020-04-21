import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PageNavigationService } from 'helion-ui';
import { HelionUiFormsModule } from 'helion-ui-forms';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { DataService, HttpService, HelionCoreHttpModule } from 'helion-core-http';
import { SidebarService } from "./services/ui/sidebar/sidebar.service";
import { SidebarNavService } from "./services/ui/sidebar/sidebar-nav.service";
import { uixReducer } from './store/reducers/uix/uix.reducer';
import { UixEffects } from './store/effects/uix/uix.effects';
import { PortalHeaderContainerComponent } from './components/containers/portal-header-container/portal-header-container.component';
import { PortalFooterContainerComponent } from './components/containers/portal-footer-container/portal-footer-container.component';
import { PortalSidemenuContainerComponent } from './components/containers/portal-sidemenu-container/portal-sidemenu-container.component';
import { PortalContentHeaderContainerComponent } from './components/containers/portal-content-header-container/portal-content-header-container.component';
import { DropDownListWidgetComponent } from './components/widgets/dropdown-list-widget/dropdown-list-widget.component'
import { RangeItemWidgetComponent } from './components/widgets/range-item-widget/range-item-widget.component';
import { SelectableListWidgetComponent } from './components/widgets/selectable-list-widget/selectable-list-widget.component';
import { DefaultPortalLayoutContainerComponent } from './components/containers/default-portal-layout-container/default-portal-layout-container.component';
import { TimelineWidgetComponent } from './components/widgets/timeline-widget/timeline-widget.component';
import { HelionCoreModule } from 'helion-core';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { PaypalCheckoutWidgetComponent } from './components/widgets/paypal-checkout-widget/paypal-checkout-widget.component';
import { PaypalCheckoutDialogComponent } from './components/dialogs/paypal-checkout-dialog/paypal-checkout-dialog.component';
import { GenericModalContainerComponent } from './components/dialogs/generic-modal-container/generic-modal-container.component';
import { PortalLandingContainerComponent } from './components/containers/portal-landing-container/portal-landing-container.component';
import { PortalAsidemenuContainerComponent } from './components/containers/portal-asidemenu-container/portal-asidemenu-container.component';
import { PostDetailsContainerComponent } from './components/containers/post-details-container/post-details-container.component';

@NgModule({
  declarations: [
    PortalHeaderContainerComponent, 
    PortalFooterContainerComponent, 
    PortalSidemenuContainerComponent, 
    PortalContentHeaderContainerComponent, 
    DefaultPortalLayoutContainerComponent,
    DropDownListWidgetComponent,
    RangeItemWidgetComponent,
    SelectableListWidgetComponent,
    TimelineWidgetComponent,
    PaypalCheckoutWidgetComponent,
    GenericModalContainerComponent,
    PaypalCheckoutDialogComponent,
    PortalLandingContainerComponent,
    PortalAsidemenuContainerComponent,
    PostDetailsContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HelionCoreModule,
    HelionCoreHttpModule,
    HelionUiComponentsModule,
    HelionUiFormsModule,
    HelionUiNotificationsModule,
    PortalAuthModule,
    StoreModule.forFeature('uixStateReducer', [
        uixReducer,
    ]),
    EffectsModule.forFeature([ UixEffects ])
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HelionCoreModule,
    HelionCoreHttpModule,
    HelionUiComponentsModule,
    HelionUiFormsModule,
    HelionUiNotificationsModule,
    PortalHeaderContainerComponent, 
    PortalFooterContainerComponent, 
    PortalSidemenuContainerComponent, 
    PortalAsidemenuContainerComponent,
    PortalContentHeaderContainerComponent,
    DefaultPortalLayoutContainerComponent,
    DropDownListWidgetComponent,
    RangeItemWidgetComponent,
    SelectableListWidgetComponent,
    TimelineWidgetComponent,
    GenericModalContainerComponent,
    PaypalCheckoutWidgetComponent
  ],
  providers: [
    SidebarService,
    SidebarNavService,
    PageNavigationService,
    DataService,
    HttpService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  
})
export class PortalSharedModule { }
