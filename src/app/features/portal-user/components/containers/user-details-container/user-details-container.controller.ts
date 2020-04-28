import { ArtifactData, AbstractData } from "helion-core";
import { ContainerController, UiContextData, UiEventData } from "helion-ui-components";
import { UserDetailsData } from "../../../data/user-details/user-details.data";

@ContainerController({
    model: UserDetailsData
})
export class UserDetailsContainerController {
    selectedArtifact: ArtifactData;

    /**
     * Every UiComponent is backed by
     * a data model object
     */
    data: AbstractData;

    /**
     * This function is provided as a hook for 
     * subclasses to do additional initialization work
     * @param contextData 
     */
    doOnUiComponentInit(contextData: UiContextData<AbstractData>) {
        this.data = contextData.data;
    }
    
}
