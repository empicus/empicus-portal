import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalAcademicRoutes } from "./portal-academic.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalAcademicRoutes)],
  exports: [RouterModule]
})
export class PortalAcademicRoutingModule {}
