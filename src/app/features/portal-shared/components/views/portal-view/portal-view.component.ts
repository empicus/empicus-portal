import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PortalModuleState } from 'src/app/features/portal-shared/store/portal-module.state';
import { UIX_SIDENAV_MINIMIZE } from 'src/app/features/portal-shared/util/portal.constants';

@Component({
    selector: 'app-portal-view',
    templateUrl: './portal-view.component.html',
    styleUrls: ['./portal-view.component.scss']
})
export class PortalViewComponent implements OnInit {

    /**
     * 
     * @param store 
     */
    constructor(private store: Store<PortalModuleState>) { 
        /* store.select(getUixSideNavStateSelector).subscribe((sideNavState) => {
            //this.toggleSideNav(sideNavState)
        }); */
    }

    /**
     * 
     */
    ngOnInit() {
        //document.getElementById('appBody').setAttribute('data-col', '2-columns');
        //document.getElementById('appBody').classList.value = 'vertical-layout vertical-menu 2-columns menu-expanded fixed-navbar';
    }
    
    /**
     * 
     */
    toggleSideNav(sideNavState: string) {
        console.log('Toggling:::::', sideNavState);
        if(sideNavState === UIX_SIDENAV_MINIMIZE) {
           document.getElementById('appBody').classList.value = 'vertical-layout vertical-menu 2-columns menu-collapsed fixed-navbar';
        }
        else {
            document.getElementById('appBody').classList.value = 'vertical-layout vertical-menu 2-columns menu-expanded fixed-navbar';
        }
    }

}
