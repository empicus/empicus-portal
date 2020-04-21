import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsLandingContainerComponent } from './components/containers/questions-landing-container/questions-landing-container.component';
import { QuestionsPostContainerComponent } from './components/containers/questions-post-container/questions-post-container.component';
import { QuestionsRoutingModule } from './questions.routing.module';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';



@NgModule({
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    PortalSharedModule
  ],
  declarations: [
    QuestionsLandingContainerComponent, 
    QuestionsPostContainerComponent
  ],
})
export class QuestionsModule { }
