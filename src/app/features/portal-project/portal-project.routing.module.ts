import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalProjectRoutes } from "./portal-project.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalProjectRoutes)],
  exports: [RouterModule]
})
export class PortalProjectRoutingModule {}
