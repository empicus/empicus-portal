import { AbstractData } from 'helion-core';
import { AuthenticationData } from '../../../data/auth/authentication.data';


/**
 * Defines the state of our ui
 */
export interface AuthenticationState extends AbstractData {
    authenticationData: AuthenticationData
}

/**
 * The initial state of our menu is closed
 */
export const initialAuthenticationState: AuthenticationState = {
    authenticationData: new AuthenticationData()
};
