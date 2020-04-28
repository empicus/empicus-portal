import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalDiseaseContactRoutes } from "./portal-disease-contact.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalDiseaseContactRoutes)],
  exports: [RouterModule]
})
export class PortalDiseaseContactRoutingModule {}
