import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalPostRoutes } from "./portal-post.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalPostRoutes)],
  exports: [RouterModule]
})
export class PortalPostRoutingModule {}
