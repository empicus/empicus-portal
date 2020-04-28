import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./features/portal-auth/portal-auth.module').then(m => m.PortalAuthModule) },
  { path: 'about', loadChildren: () => import('./features/home-about/home-about.module').then(m => m.HomeAboutModule) },
  { path: 'blog', loadChildren: () => import('./features/home-blog/home-blog.module').then(m => m.HomeBlogModule) },
  { path: 'contact', loadChildren: () => import('./features/home-contact/home-contact.module').then(m => m.HomeContactModule) },
  { path: 'donate', loadChildren: () => import('./features/home-donate/home-donate.module').then(m => m.HomeDonateModule) },
  { path: 'search', loadChildren: () => import('./features/home-search/home-search.module').then(m => m.HomeSearchModule) },
  { path: 'social', loadChildren: () => import('./features/home-social/home-social.module').then(m => m.HomeSocialModule) },
  { path: 'portal', loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule) },
  { path: 'portal-user', loadChildren: () => import('./features/portal-user/portal-user.module').then(m => m.PortalUserModule) },
  { path: 'topic', loadChildren: () => import('./features/portal-topic/portal-topic.module').then(m => m.PortalTopicModule) },
  { path: 'post', loadChildren: () => import('./features/portal-post/portal-post.module').then(m => m.PortalPostModule) },
  { path: 'project', loadChildren: () => import('./features/portal-project/portal-project.module').then(m => m.PortalProjectModule) },
  { path: 'pathogen', loadChildren: () => import('./features/portal-pathogen/portal-pathogen.module').then(m => m.PortalPathogenModule) },
  { path: 'disease', loadChildren: () => import('./features/portal-disease/portal-disease.module').then(m => m.PortalDiseaseModule) },
  { path: 'disease-case', loadChildren: () => import('./features/portal-disease-case/portal-disease-case.module').then(m => m.PortalDiseaseCaseModule) },
  { path: 'disease-contact', loadChildren: () => import('./features/portal-disease-contact/portal-disease-contact.module').then(m => m.PortalDiseaseContactModule) },
  { path: 'conversation', loadChildren: () => import('./features/portal-conversation/portal-conversation.module').then(m => m.PortalConversationModule) },
  { path: 'report', loadChildren: () => import('./features/portal-report/portal-report.module').then(m => m.PortalReportModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
