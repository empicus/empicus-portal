import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalDiseaseRoutes } from "./portal-disease.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalDiseaseRoutes)],
  exports: [RouterModule]
})
export class PortalDiseaseRoutingModule {}
