import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalDiseaseCaseRoutes } from "./portal-disease-case.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalDiseaseCaseRoutes)],
  exports: [RouterModule]
})
export class PortalDiseaseCaseRoutingModule {}
