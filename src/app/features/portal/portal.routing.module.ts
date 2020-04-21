import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalRoutes } from "./portal.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalRoutes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {}