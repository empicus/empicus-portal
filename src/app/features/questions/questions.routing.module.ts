import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { QuestionsRoutes } from "./questions.routes";

@NgModule({
  imports: [RouterModule.forChild(QuestionsRoutes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {}