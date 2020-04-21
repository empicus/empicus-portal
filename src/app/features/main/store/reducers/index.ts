

import * as fromNgrxRouter from '@ngrx/router-store';
import * as routeReducer from './route.reducer';
import {
    ActionReducerMap, createFeatureSelector,
    createSelector, ActionReducer, MetaReducer
} from '@ngrx/store';
import { UiState, uiReducer } from 'helion-ui';

import { storageSync } from '@larscom/ngrx-store-storagesync';
import { uiNotificationReducer, UiNotificationState, UiDialogState, uiDialogReducer } from 'helion-ui-notifications';
import { uixReducer } from '../../../portal-shared/store/reducers/uix/uix.reducer';
import { UixState } from '../../../portal-shared/store/reducers/uix/uix.state';
import { AuthenticationState } from '../../../portal-auth/store/reducers/auth/authentication.state';
import { authenticationReducer } from '../../../portal-auth/store/reducers/auth/authentication.reducer';
import { AcademicOrderWizardState } from '../../../assignment/store/reducers/academic-order-wizard/academic-order-wizard.state';
import { academicOrderWizardReducer } from '../../../assignment/store/reducers/academic-order-wizard/academic-order-wizard.reducer';
import { ContentOrderWizardState } from '../../../assignment/store/reducers/content-order-wizard/content-order-wizard.state';
import { contentOrderWizardReducer } from '../../../assignment/store/reducers/content-order-wizard/content-order-wizard.reducer';
import { ActionQueueState, actionQueueReducer } from 'helion-core';
/**
 * State of application
 */
export interface AppState {
    actionQueueState: ActionQueueState,
    authenticationState: AuthenticationState,
    uiState: UiState,
    uixState: UixState,
    uiNotificationState: UiNotificationState,
    uiDialogState: UiDialogState,
    academicOrderWizardState: AcademicOrderWizardState,
    contentOrderWizardState: ContentOrderWizardState,
    routerReducer: fromNgrxRouter.RouterReducerState<routeReducer.RouterStateUrl>;
}

/**
 * The reducers within the system
 */
export const appReducers: ActionReducerMap<AppState> = {
    actionQueueState: actionQueueReducer,
    authenticationState: authenticationReducer,
    uiState: uiReducer,
    uixState: uixReducer,
    uiDialogState: uiDialogReducer,
    uiNotificationState: uiNotificationReducer,
    academicOrderWizardState: academicOrderWizardReducer,
    contentOrderWizardState: contentOrderWizardReducer,
    routerReducer: fromNgrxRouter.routerReducer
};

export function storageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return storageSync<AppState>({
        features: [
            { stateKey: 'authenticationState', storageForFeature: window.localStorage }
           /*  { stateKey: 'authState', storageForFeature: window.localStorage },
            { stateKey: 'uiState', storageForFeature: window.localStorage }, */
            /* { stateKey: 'notificationState', storageForFeature: window.localStorage },  */
        ],
        // defaults to localStorage
        storage: window.localStorage
    })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [storageSyncReducer];

/**
 * Route state selector
 */
export const getRouteStateSelector = createFeatureSelector<fromNgrxRouter.RouterReducerState<routeReducer.RouterStateUrl>>('routerReducer');

export const selectRouteURL = createSelector(getRouteStateSelector, router => router.state.url);

export const selectRouteParameters = createSelector(getRouteStateSelector, router => router.state.params);

export const selectRouteQueryParameters = createSelector(getRouteStateSelector, router => router.state.queryParams);



