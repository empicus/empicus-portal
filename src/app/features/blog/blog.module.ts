import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogLandingContainerComponent } from './components/containers/blog-landing-container/blog-landing-container.component';
import { BlogPostContainerComponent } from './components/containers/blog-post-container/blog-post-container.component';
import { BlogRoutingModule } from './blog.routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';



@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    PortalSharedModule
  ],
  declarations: [
    BlogLandingContainerComponent, 
    BlogPostContainerComponent
  ],
})
export class BlogModule { }
