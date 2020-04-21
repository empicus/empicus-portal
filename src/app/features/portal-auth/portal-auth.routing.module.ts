import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalAuthRoutes } from "./portal-auth.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalAuthRoutes)],
  exports: [RouterModule]
})
export class PortalAuthRoutingModule {}