import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { PortalConversationRoutes } from "./portal-conversation.routes";

@NgModule({
  imports: [RouterModule.forChild(PortalConversationRoutes)],
  exports: [RouterModule]
})
export class PortalConversationRoutingModule {}
