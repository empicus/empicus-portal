import { Injectable } from '@angular/core';
import { AuthenticationData } from 'src/app/features/portal-auth/data/auth/authentication.data';
import { INavData } from '../../../data/nav.data';
import { Store } from '@ngrx/store';
import { AuthModuleState, getUserAuthenticationStateSelector } from 'src/app/features/portal-auth/store/auth-module.state';

@Injectable()
export class SidebarNavService {
    authenticationData: AuthenticationData;
    
    constructor(authStore: Store<AuthModuleState>) {
        authStore.select(getUserAuthenticationStateSelector).subscribe((authenticationData) => {
            this.authenticationData = authenticationData;
        });
    }

    /**
     * 
     * @param item 
     */
    public itemType(item) {
        if (item.divider) {
            return 'divider';
        } else if (item.title) {
            return 'title';
        } else if (item.children) {
            return 'dropdown';
        } else if (item.label) {
            return 'label';
        } else if (!Object.keys(item).length) {
            return 'empty';
        } else {
            return 'link';
        }
    }

    /**
     * 
     * @param router 
     * @param item 
     */
    public isActive(router, item) {
        return router.isActive(item.url, false);
    }

    /**
     * 
     * @param item 
     */
    public isVisible(item: INavData) {
        if(item.visibility === 'user') {
            return (this.authenticationData.isUserAuthenticated) ? true : false;
        }
        else if(item.visibility === 'guest') {
            return (!this.authenticationData.isUserAuthenticated) ? true : false;
        }
        else if(item.visibility === 'public') {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * 
     */
    public hasBadge = (item) => Boolean(item.badge);

    /**
     * 
     */
    public hasIcon = (item) => Boolean(item.icon);

    /**
     * 
     * @param item 
     */
    public getIconClass(item) {
        const classes = {
            'nav-icon': true
        };
        if (this.hasIcon(item)) {
            const icon = item.icon;
            classes[icon] = this.hasIcon(item);
        }
        return classes;
    }
}
