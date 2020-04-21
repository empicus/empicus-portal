import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContainerComponent, UiComponentUtils, UiContextData } from 'helion-ui-components';
import { UIX_SIDENAV_OPENED } from "../../../util/portal.constants";
import { PortalHeaderContainerController } from "./portal-header-container.controller";
import { AuthenticationData } from '../../../../portal-auth/data/auth/authentication.data';
import { openSideNavAction, closeSideNavAction } from '../../../store/actions/uix/uix.actions';
import { PortalModuleState, getUixSideNavStateSelector } from '../../../store/portal-module.state';
import { AuthModuleState, getUserAuthenticationStateSelector } from '../../../../portal-auth/store/auth-module.state';
import { AbstractData } from 'helion-core';
import { UiNotificationModuleState } from 'helion-ui-notifications';

@Component({
    selector: 'app-portal-header-container',
    templateUrl: './portal-header-container.component.html',
    styleUrls: ['./portal-header-container.component.scss']
})
export class PortalHeaderContainerComponent extends ContainerComponent {

    constructor(store: Store<PortalModuleState>,
        private authStore: Store<AuthModuleState>,
        private notificationStore: Store<UiNotificationModuleState>) { 
        super(store);
        this.uiController = UiComponentUtils.initController(this, PortalHeaderContainerController);

        this.selectUixSideNavState();
        this.selectUserAuthenticationState();
    }

    /**
     * 
     */
    selectUserAuthenticationState() {
        this.authStore.select(getUserAuthenticationStateSelector).subscribe((authenticationData) => {
            this.uiController['authenticationData'] = authenticationData;
        });
    }

    /**
     * 
     */
    selectUixSideNavState() {
        this.store.select(getUixSideNavStateSelector).subscribe((sideNavState) => {
            this.uiController['sideNavState'] = sideNavState;
        });
    }

    toggleSideNav() {
        if(this.uiController['sideNavState'] === UIX_SIDENAV_OPENED) {
            this.store.dispatch(closeSideNavAction());
        }
        else {
            this.store.dispatch(openSideNavAction());
        }
    }
    
    /**
     * 
     * @param contextData 
     */
    onUiComponentInit(contextData: UiContextData<AbstractData>){
        super.onUiComponentInit(contextData);
    }

}
