import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as uixActions from "../../actions/uix/uix.actions";
import { SidebarService } from '../../../services/ui/sidebar/sidebar.service';
import { of } from 'rxjs';

@Injectable()

export class UixEffects {

    constructor(private sidebarService: SidebarService,
        private actions$: Actions, private ngZone: NgZone) { }

    /**
     * 
     */
    openSideMenuEffect$ = createEffect(() => this.actions$.pipe(
        ofType(uixActions.openSideNavAction),
        map(action => { this.sidebarService.openSidebar() }),
    ),
        { dispatch: false }
    );

    /**
     * 
     */
    closeSideMenuEffect$ = createEffect(() => this.actions$.pipe(
        ofType(uixActions.closeSideNavAction),
        map(action => { this.sidebarService.closeSidebar() }),
    ),
        { dispatch: false }
    );
}
