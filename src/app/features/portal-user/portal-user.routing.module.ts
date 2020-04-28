import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalUserRoutes } from "./portal-user.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalUserRoutes)],
  exports: [RouterModule]
})
export class PortalUserRoutingModule {}
