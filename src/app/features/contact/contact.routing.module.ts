import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ContactRoutes } from "./contact.routes";

@NgModule({
  imports: [RouterModule.forChild(ContactRoutes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}