import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { getUserAuthenticationStateSelector, AuthModuleState } from '../../store/auth-module.state';
import { StorageService, TARGET_URL } from 'helion-core';
import { AuthenticationData } from '../../data/auth/authentication.data';
import { UiNotificationModuleState } from 'helion-ui-notifications';

@Injectable()
export class LoginGuardService {

    private authenticationData: AuthenticationData;

    constructor(private router: Router, 
        private notificationStore: Store<UiNotificationModuleState>,
        private storageService:StorageService, private store: Store<AuthModuleState>) {
        // Select the login state
        store.select(getUserAuthenticationStateSelector).subscribe((authenticationData) => {
            this.authenticationData = authenticationData;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationData.isUserAuthenticated) {
            return true;
        } else {
            //this.storageService.saveSessionItem(TARGET_URL, state.url);
            this.router.navigate(['/home']);
            return false;
        }
    }

}
