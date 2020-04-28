import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalReportRoutes } from "./portal-report.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalReportRoutes)],
  exports: [RouterModule]
})
export class PortalReportRoutingModule {}
