import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalTopicRoutes } from "./portal-topic.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalTopicRoutes)],
  exports: [RouterModule]
})
export class PortalTopicRoutingModule {}
