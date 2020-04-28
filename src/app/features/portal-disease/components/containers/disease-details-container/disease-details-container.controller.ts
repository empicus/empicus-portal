import { ArtifactData, AbstractData } from "helion-core";
import { ContainerController, UiContextData, UiEventData } from "helion-ui-components";
import { DiseaseDetailsData } from "../../../data/disease-details/disease-details.data";

@ContainerController({
    model: DiseaseDetailsData
})
export class DiseaseDetailsContainerController {
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
