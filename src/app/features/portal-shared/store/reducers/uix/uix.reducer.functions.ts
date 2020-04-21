
import { UixState } from './uix.state';
import { UIX_SIDENAV_CLOSED, UIX_SIDENAV_MINIMIZE, UIX_SIDENAV_OPENED } from '../../../util/portal.constants';

/**
 * @param state
 */
export const onCloseSideNavEvent = (state: UixState): UixState => {
    return { ...state, sideNavState: UIX_SIDENAV_CLOSED };
};

/**
 * @param state
 */
export const onOpenSideNavEvent = (state: UixState): UixState => {
    return { ...state, sideNavState: UIX_SIDENAV_OPENED };
};

/**
 * @param state
 */
export const onMinimizeSideNavEvent = (state: UixState): UixState => {
    return { ...state, sideNavState: UIX_SIDENAV_MINIMIZE };
};
/**
 * @param state
 */
export const onCloseScreenEvent = (state: UixState): UixState => {
    return { ...state };
};

/**
 * @param state
 */
export const onOpenScreenEvent = (state: UixState): UixState => {
    return { ...state };
};

/**
 * @param state
 */
export const onLockScreenEvent = (state: UixState): UixState => {
    return { ...state };
};

/**
 * @param state
 */
export const onLockScreenUnregisteredEvent = (state: UixState): UixState => {
    return { ...state };
};