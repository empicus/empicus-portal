import { ArtifactData, AbstractData } from "helion-core";
import { ContainerController, UiContextData, UiEventData } from "helion-ui-components";
import { ConversationDetailsData } from "../../../data/conversation-details/conversation-details.data";

@ContainerController({
    model: ConversationDetailsData
})
export class ConversationDetailsContainerController {
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
