import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessLandingContainerComponent } from './components/containers/business-landing-container/business-landing-container.component';
import { BusinessPostContainerComponent } from './components/containers/business-post-container/business-post-container.component';



@NgModule({
  declarations: [BusinessLandingContainerComponent, BusinessPostContainerComponent],
  imports: [
    CommonModule
  ]
})
export class BusinessModule { }
