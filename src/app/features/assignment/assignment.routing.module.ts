import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AssignmentRoutes } from "./assignment.routes";

@NgModule({
  imports: [RouterModule.forChild(AssignmentRoutes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule {}
