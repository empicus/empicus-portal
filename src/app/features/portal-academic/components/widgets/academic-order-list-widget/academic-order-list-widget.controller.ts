import { WidgetController } from 'helion-ui-components';
import * as fromAcademicFunctions from "../../../functions/portal-academic.functions";
import { AcademicOrderDetailsData } from '../../../data/academic-order-details/academic-order-details.data';

@WidgetController({
    model: AcademicOrderDetailsData,
    functions: [
        { functionName: "onListWidgetItemClicked", func: fromAcademicFunctions.onListWidgetItemClicked }
    ]
})
export class AcademicOrderListWidgetController {

}
