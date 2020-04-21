import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

    constructor() { }

    openSidebar() {
        console.log('#############OPENING')
        document.getElementById('sidebar').classList.value = 'c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show';
    }
    closeSidebar() {
        console.log('#############CLOSING')
        document.getElementById('sidebar').classList.value = 'c-sidebar c-sidebar-dark c-sidebar-fixed';
    }
}
