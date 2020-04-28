import { 
    ArtifactData, 
    AbstractData, 
    ObjectUtils 
} from "helion-core";
import { navigateToAction } from "helion-ui";
import { ContainerController, UiTableData, UiContextData, UiEventData } from "helion-ui-components";

@ContainerController({ 
    model: ArtifactData,
})
export class TopicListContainerController  {

    uiTableData: UiTableData;
    
    onUiComponentInit(uiContextData: UiContextData<AbstractData>) {
        this.uiTableData = new UiTableData('topicList');
        this.uiTableData.columns.push({ name: 'code', description: 'Code' });
        this.uiTableData.columns.push({ name: 'name', description: 'Name' });
        this.uiTableData.columns.push({ name: 'createdDt', description: 'Recieved' });
    }

    onTableRowClickedEvent(data: UiEventData) {
        let rowData = data.eventData;
        console.log('Table row clicked event received', rowData, this)

        if(ObjectUtils.isValid(rowData)) {

            let code = rowData['fieldData']['code'].value;
            let detailsRoute = '/portal-topic/view-topic/' + code;

            console.log('Table row clicked event received', code, detailsRoute)

            this['uiComponent'].dispatch(navigateToAction({
                data: {
                    route: detailsRoute,
                    routeData: []
                }
            }))
            

        }
    }

}
