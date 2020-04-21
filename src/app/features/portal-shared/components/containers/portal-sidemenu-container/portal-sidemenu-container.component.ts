import { Component, OnInit } from '@angular/core';
import { sidebarNav } from '../../../_navs';
import { SidebarService } from '../../../services/ui/sidebar/sidebar.service';
import { SidebarNavService } from '../../../services/ui/sidebar/sidebar-nav.service';
import { Store } from '@ngrx/store';
import { PortalModuleState, getUixSideNavStateSelector } from '../../../store/portal-module.state';
import { closeSideNavAction } from '../../../store/actions/uix/uix.actions';
import { ContainerComponent, UiComponentUtils } from 'helion-ui-components';
import { PortalSidemenuContainerController } from "./portal-sidemenu-container.controller";
import { AuthModuleState, getUserAuthenticationStateSelector } from 'src/app/features/portal-auth/store/auth-module.state';

@Component({
    selector: 'app-portal-sidemenu-container',
    templateUrl: './portal-sidemenu-container.component.html',
    styleUrls: ['./portal-sidemenu-container.component.scss']
})
export class PortalSidemenuContainerComponent extends ContainerComponent {

    sidebarNavItems = sidebarNav;

    constructor(
        store: Store<PortalModuleState>,
        public sidebarService: SidebarService,
        public sidebarNavService: SidebarNavService,
        private authStore: Store<AuthModuleState>) { 
        super(store);
        this.uiController = UiComponentUtils.initController(this, PortalSidemenuContainerController);
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

    closeSidebar(){
        this.store.dispatch(closeSideNavAction());
    }
}
