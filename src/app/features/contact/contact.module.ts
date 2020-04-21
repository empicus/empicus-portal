import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLandingContainerComponent } from './components/containers/contact-landing-container/contact-landing-container.component';
import { ContactRoutingModule } from './contact.routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';



@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    PortalSharedModule
  ],
  declarations: [
    ContactLandingContainerComponent, 
  ],
})
export class ContactModule { }
