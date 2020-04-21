import { Routes } from '@angular/router';
import { AuthViewComponent } from './components/views/auth-view/auth-view.component';
import { LoginContainerComponent } from './components/containers/login-container/login-container.component';
import { SignupContainerComponent } from './components/containers/signup-container/signup-container.component';
import { ResetPasswordContainerComponent } from './components/containers/reset-password-container/reset-password-container.component';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { AuthenticationModalContainerComponent } from './components/dialogs/authentication-modal-container/authentication-modal-container.component';

export const PortalAuthRoutes: Routes = [
    /* { path: '', redirectTo: '', pathMatch: 'full' }, */
    {
        path: 'main', component: AuthViewComponent,
        children: [
            
            {
                path: 'login',
                component: LoginContainerComponent,
            },
            {
                path: 'signup',
                component: SignupContainerComponent,
            },
            {
                path: 'reset-password',
                component: ResetPasswordContainerComponent,
            },
        ]
    },
];
