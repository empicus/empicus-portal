import { ArtifactData, AbstractData } from "helion-core";
import { ContainerController, UiContextData, UiEventData } from "helion-ui-components";
import { TopicDetailsData } from "../../../data/topic-details/topic-details.data";

@ContainerController({
    model: TopicDetailsData
})
export class TopicDetailsContainerController {
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
