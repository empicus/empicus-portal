import { submitLogoutRequestAction } from '../../portal-auth/store/actions/authentication/authentication.actions';
import { openUiDialogAction } from 'helion-ui-notifications';

export const showSigninDialog = function(eventData: any) {
    this['uiComponent'].notificationStore.dispatch(openUiDialogAction({ data: { uiComponentName: 'loginDialog' } }));
}

export const showSignoutDialog = function(eventData: any) {
}

export const logout = function(eventData: any) {
    this['uiComponent'].authStore.dispatch(submitLogoutRequestAction(this['authenticationData']));
}