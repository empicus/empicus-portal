import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as fromCoreModule from 'helion-core';
import * as formActions from '../../../portal-auth/store/actions/authentication/authentication.actions';
import { AuthenticationData } from 'src/app/features/portal-auth/data/auth/authentication.data';
import * as fromServiceOrderActions from "../../store/actions/service-order.actions";
import * as fromServiceOrderConstants from '../../util/client-order.constants'
import { PortalAssignmentModuleState } from '../../store/assignment-module.state';
import { AuthModuleState, getUserAuthenticationStateSelector } from 'src/app/features/portal-auth/store/auth-module.state';
import { getActionQueueItemsStateSelector } from 'helion-core';

@Injectable()
export class ServiceOrderAuthService {

    userAuthenticationData: AuthenticationData;
    actionQueueItems: fromCoreModule.ActionQueueItemData[] = [];

    constructor(private actions$: Actions,
        private authStore: Store<AuthModuleState>,
        private store: Store<PortalAssignmentModuleState>,
        private coreStore: Store<fromCoreModule.CoreModuleState>) {

        authStore.select(getUserAuthenticationStateSelector).subscribe((userAuthenticationData) => {
            this.userAuthenticationData = userAuthenticationData;
        });
        coreStore.select(getActionQueueItemsStateSelector).subscribe((actionQueueItems) => {
            this.actionQueueItems = actionQueueItems;
        })
    }

    /**
     * 
     */
    isUserAuthenticated() {
       return this.userAuthenticationData.isUserAuthenticated;
    }

    /**
     * 
     */
    onAuthenticationSuccess() {
        let that = this;
        this.actions$.pipe(ofType(formActions.submitLoginRequestSuccessAction)).subscribe((actionObj) => { 
            console.log('ServiceOrderAuthService:::onAuthenticationSuccess::(actionObj)', actionObj);
            this.actionQueueItems.forEach( function (item) {
                console.log('ServiceOrderAuthService:::onAuthenticationSuccess::(item.store.dispatch(item.actionCreator))', item.actionCreator);
                item.store.dispatch(item.actionCreator);
                that.coreStore.dispatch(fromCoreModule.removeActionQueueItemAction({ actionQueueItemId: item.actionQueueItemId }));
            })
        });
    }

    /**
     * 
     */
    onAuthenticationRegisterSuccess() {
        let that = this;
        this.actions$.pipe(ofType(formActions.submitSignupRequestSuccessAction)).subscribe((actionObj) => {  
            console.log('ServiceOrderAuthService:::onAuthenticationRegisterSuccess::(actionObj)', actionObj);
            this.actionQueueItems.forEach( function (item) {
                console.log('ServiceOrderAuthService:::onAuthenticationSuccess::(item.store.dispatch(item.actionCreator))', item);
                item.store.dispatch(item.actionCreator);
                that.coreStore.dispatch(fromCoreModule.removeActionQueueItemAction({ actionQueueItemId: item.actionQueueItemId }));
            })
        });
    }

    /**
     * 
     * @param formData 
     */
    addToActionQueue(formData: any) {
        let that = this;

        console.log('ServiceOrderAuthService:::addToActionQueue::formData');
        this.coreStore.dispatch(fromCoreModule.addActionQueueItemAction({
            data: {
                store: that.store,
                actionQueueItemId: fromCoreModule.StringUtils.makeId(8),
                actionQueueCategory: fromServiceOrderConstants.SERVICE_ORDER_QUEUE_NAME,
                actionCreator: fromServiceOrderActions.submitServiceOrderRequestAction({ data: formData }),
            }
        }))
    }

}