import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './components/views/home-view/home-view.component';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { HomeLandingContainerComponent } from "./components/containers/home-landing-container/home-landing-container.component";
import { HomeRoutingModule } from "./home.routing.module";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../portal-auth/services/interceptors/auth-interceptor.service';
import { HttpErrorNotifierService } from 'helion-ui-notifications';
import { ClientAccessInterceptorService } from 'src/app/services/client-access-service/client-access.service';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PortalSharedModule,
    PortalAuthModule,
  ],
  declarations: [
    HomeViewComponent,
    HomeLandingContainerComponent
  ],
  providers:[,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorNotifierService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ClientAccessInterceptorService, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
