import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ActionQueueService } from 'helion-core';
import { UrlService } from 'helion-core-http';
import { UiDialogService, UiDialogsMapService, 
    UiNotificationService, HttpErrorNotifierService } from 'helion-ui-notifications';
import { MainModule } from "./features/main/main.module";
import { appReducers, metaReducers } from './features/main';
import { mainEffects } from './features/main/store/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientUrlService } from './services/client-url-service/client-url.service';
import { ClientUiDialogsMapService } from './services/client-ui-dialogs-map-service/client-ui-dialogs-map.service';
import { PortalSharedModule } from './features/portal-shared/portal-shared.module';
import { PortalAuthModule } from './features/portal-auth/portal-auth.module';
import { AuthenticationModalContainerComponent } from './features/portal-auth/components/dialogs/authentication-modal-container/authentication-modal-container.component';
import { LoginDialogComponent } from './features/portal-auth/components/dialogs/login-dialog/login-dialog.component';
import { AuthInterceptorService } from './features/portal-auth/services/interceptors/auth-interceptor.service';
import { ClientAccessInterceptorService } from './services/client-access-service/client-access.service';
import { GenericModalContainerComponent } from './features/portal-shared/components/dialogs/generic-modal-container/generic-modal-container.component';
import { PaypalCheckoutDialogComponent } from './features/portal-shared/components/dialogs/paypal-checkout-dialog/paypal-checkout-dialog.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PortalSharedModule,
        PortalAuthModule,
        /* StorageServiceModule, */
        MainModule,
        StoreModule.forRoot(appReducers, { metaReducers }),
        EffectsModule.forRoot(mainEffects),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),

    ],
    providers: [
        ActionQueueService,
        UiDialogService,
        UiNotificationService,
        { provide: UiDialogsMapService, useClass: ClientUiDialogsMapService },
        { provide: UrlService, useClass: ClientUrlService },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorNotifierService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ClientAccessInterceptorService, multi: true },
    ],
    entryComponents: [
        AuthenticationModalContainerComponent,
        LoginDialogComponent,
        GenericModalContainerComponent,
        PaypalCheckoutDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
