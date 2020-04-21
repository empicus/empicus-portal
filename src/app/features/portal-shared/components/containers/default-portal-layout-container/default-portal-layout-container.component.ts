import { Component, OnInit } from '@angular/core';
import { sidebarNav } from "../../../_navs";
import { SidebarService } from "../../../services/ui/sidebar/sidebar.service";
import { SidebarNavService } from "../../../services/ui/sidebar/sidebar-nav.service";

@Component({
    selector: 'app-default-portal-layout-container',
    templateUrl: './default-portal-layout-container.component.html',
    styleUrls: ['./default-portal-layout-container.component.scss']
})
export class DefaultPortalLayoutContainerComponent implements OnInit {

    sidebarNavItems = sidebarNav;

    constructor(
        public sidebarService: SidebarService,
        public sidebarNavService: SidebarNavService) { }

    ngOnInit() {
    }

    onScroll(event: any) {
        console.log('Scrolling >>>>>>>>>>>.', event);
    }
}
