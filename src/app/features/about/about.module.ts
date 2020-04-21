import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutLandingContainerComponent } from './components/containers/about-landing-container/about-landing-container.component';
import { AboutPostContainerComponent } from './components/containers/about-post-container/about-post-container.component';
import { AboutRoutingModule } from './about.routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';



@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    PortalSharedModule
  ],
  declarations: [
    AboutLandingContainerComponent, 
    AboutPostContainerComponent
  ],
})
export class AboutModule { }
