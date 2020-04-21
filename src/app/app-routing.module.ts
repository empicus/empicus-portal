import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDialogComponent } from './features/portal-auth/components/dialogs/login-dialog/login-dialog.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./features/portal-auth/portal-auth.module').then(m => m.PortalAuthModule) },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) },
  { path: 'services', loadChildren: () => import('./features/business/business.module').then(m => m.BusinessModule) },
  { path: 'questions', loadChildren: () => import('./features/questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) },
  { path: 'assignment', loadChildren: () => import('./features/assignment/assignment.module').then(m => m.AssignmentModule) },
  { path: 'portal', loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule) },
  { path: 'portal-academic', loadChildren: () => import('./features/portal-academic/portal-academic.module').then(m => m.PortalAcademicModule) },
  { path: 'portal-content', loadChildren: () => import('./features/portal-content/portal-content.module').then(m => m.PortalContentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
