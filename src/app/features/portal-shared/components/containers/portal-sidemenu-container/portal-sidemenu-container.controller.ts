import { ArtifactData, AbstractData } from "helion-core";
import { ContainerController, UiContextData, UiEventData } from "helion-ui-components";
import { AuthenticationData } from '../../../../portal-auth/data/auth/authentication.data';
import * as sharedFunctions from '../../../functions/portal-shared.functions';

@ContainerController({
    model: ArtifactData,
	functions: [{
		functionName: 'showSigninDialog',
		func: sharedFunctions.showSigninDialog
	},{
		functionName: 'showSignoutDialog',
		func: sharedFunctions.showSignoutDialog
	}]
})
export class PortalSidemenuContainerController {
    selectedArtifact: ArtifactData;
    sideNavState: string;
    authenticationData: AuthenticationData;
    
}
