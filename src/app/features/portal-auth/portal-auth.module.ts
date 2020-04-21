import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PortalAuthRoutingModule } from './portal-auth.routing.module';
import { PortalSharedModule } from "../portal-shared/portal-shared.module";
import { SignupWidgetComponent } from './components/widgets/signup-widget/signup-widget.component';
import { SignupContainerComponent } from './components/containers/signup-container/signup-container.component';
import { LoginWidgetComponent } from './components/widgets/login-widget/login-widget.component';
import { LoginContainerComponent } from './components/containers/login-container/login-container.component';
import { AuthViewComponent } from './components/views/auth-view/auth-view.component';
import { LoginEffects } from './store/effects/login.effects';
import { SignupEffects } from './store/effects/signup.effects';
import { LoginService } from './services/auth/login.service';
import { SignupService } from './services/auth/signup.service';
import { ResetPasswordService } from './services/auth/reset-password.service';
import { AuthenticationDataService } from  './services/data/authentication-data.service';
import { EthereumAccountKeyService } from './services/ethereum/ethereum-account-key.service';
import { EthereumAccountService } from './services/ethereum/ethereum-account.service';
import { LoginGuardService } from './services/guards/login-guard.service';
import { authenticationReducer } from './store/reducers/auth/authentication.reducer';
import { ResetPasswordWidgetComponent } from './components/widgets/reset-password-widget/reset-password-widget.component';
import { ResetPasswordContainerComponent } from './components/containers/reset-password-container/reset-password-container.component';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { AuthenticationModalContainerComponent } from './components/dialogs/authentication-modal-container/authentication-modal-container.component';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { SignupDialogComponent } from './components/dialogs/signup-dialog/signup-dialog.component';
import { ResetPasswordDialogComponent } from './components/dialogs/reset-password-dialog/reset-password-dialog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HelionCoreModule } from 'helion-core';
import { HelionCoreHttpModule } from 'helion-core-http';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiFormsModule } from 'helion-ui-forms';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';


@NgModule({
  imports: [
    CommonModule,
    PortalAuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HelionCoreModule,
    HelionCoreHttpModule,
    HelionUiComponentsModule,
    HelionUiFormsModule,
    HelionUiNotificationsModule,
    /* PortalSharedModule, */
    StoreModule.forFeature('authStateReducer', [authenticationReducer]),
    EffectsModule.forFeature([LoginEffects, SignupEffects]),
  ],
  declarations: [
    SignupWidgetComponent, 
    SignupContainerComponent, 
    LoginWidgetComponent, 
    LoginContainerComponent, 
    AuthViewComponent, 
    ResetPasswordWidgetComponent, 
    ResetPasswordContainerComponent, 
    AuthenticationModalContainerComponent, 
    LoginDialogComponent, 
    SignupDialogComponent, 
    ResetPasswordDialogComponent
  ],
  exports: [
    SignupWidgetComponent, 
    SignupContainerComponent, 
    LoginWidgetComponent, 
    LoginContainerComponent, 
    ResetPasswordWidgetComponent, 
    ResetPasswordContainerComponent, 
    AuthenticationModalContainerComponent,
    LoginDialogComponent, 
    SignupDialogComponent, 
    ResetPasswordDialogComponent
  ],
  providers: [
    LoginService,
    SignupService,
    ResetPasswordService,
    EthereumAccountService,
    EthereumAccountKeyService,
    AuthenticationDataService,
    LoginGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class PortalAuthModule { }
