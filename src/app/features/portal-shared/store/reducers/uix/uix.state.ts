import { AbstractData } from 'helion-core';
import { UIX_SIDENAV_OPENED, UIX_SIDENAV_CLOSED } from '../../../util/portal.constants';


/**
 * Defines the state of our ui
 */
export interface UixState extends AbstractData {
    sideNavState: string; // CLOSED OPENED MINIMIZED
    screenState: string; // CLOSED OPENED LOCKED UNREGISTERED
}

/**
 * The initial state of our menu is closed
 */
export const initialUixState: UixState = {
    sideNavState: UIX_SIDENAV_CLOSED,
    screenState: 'UNREGISTERED'
};
