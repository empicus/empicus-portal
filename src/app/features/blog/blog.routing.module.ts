import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BlogRoutes } from "./blog.routes";

@NgModule({
  imports: [RouterModule.forChild(BlogRoutes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}