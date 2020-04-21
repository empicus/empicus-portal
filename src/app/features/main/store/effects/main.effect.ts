import { Injectable, NgZone } from "@angular/core";
import { map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
//import * as fromAuthModule from 'helion-auth';
/* import { StorageService } from 'helion-core'; */

@Injectable()
export class MainEffects {

    constructor(/* private storageService: StorageService, */ private actions$: Actions) { }

    /* logoutRequestSuccessEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuthModule.logoutRequestSuccess),
        map(action => {
            this.storageService.deleteLocal('authState');
            this.storageService.deleteLocal('orderData');
            this.storageService.deleteLocal('cartDataState');
        })),
        { dispatch: false }
    ); */

}