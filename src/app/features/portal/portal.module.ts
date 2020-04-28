import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from "./portal.routing.module";
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { PortalLandingContainerComponent } from './components/containers/portal-landing-container/portal-landing-container.component';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';
import { PortalViewComponent } from '../portal-shared/components/views/portal-view/portal-view.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalSharedModule,
    PortalAuthModule,
  ],
  declarations: [
    PortalViewComponent,
    PortalLandingContainerComponent,
  ],
  exports: [
    PortalSharedModule,
    PortalViewComponent,
  ]
})
export class PortalModule { }
