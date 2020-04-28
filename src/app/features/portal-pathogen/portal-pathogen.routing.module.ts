import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalPathogenRoutes } from "./portal-pathogen.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalPathogenRoutes)],
  exports: [RouterModule]
})
export class PortalPathogenRoutingModule {}
