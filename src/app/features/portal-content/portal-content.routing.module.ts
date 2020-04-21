import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalContentRoutes } from "./portal-content.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalContentRoutes)],
  exports: [RouterModule]
})
export class PortalContentRoutingModule {}
