import { createAction } from '@ngrx/store';

/**
 * These actions are dispatch when a auth event occurs
 */
export const closeSideNavAction = createAction('[Uix] Uix Close SideNav');
export const openSideNavAction = createAction('[Uix] Uix Open SideNav');
export const minimizeSideNavAction = createAction('[Uix] Uix Minimize SideNav');

export const closeScreenAction = createAction('[Uix] Uix Close Screen');
export const openScreenAction = createAction('[Uix] Uix Open Screen');
export const lockScreenAction = createAction('[Uix] Uix Lock Screen');
export const lockScreenUnregisteredAction = createAction('[Uix] Uix lock Screen Unregistered');

