import { AbstractData } from "helion-core";
import { ServiceOrderData } from '../service-order/service-order.data';

export class ContentOrderWizardData implements AbstractData {
    contentType: string;
    title: string;
    deadLine: string;

    writerLevel: string;
    wordCount: number;
    sourceCount: number;
    keyWords: string;
    paperDetails: string;
    
    includeSummary: boolean
    includePlagReport: boolean;
    includeEditorCheck: boolean;
    includeSourcesCopy: boolean;
    includePrioritySupport: boolean;
    writerLevelTxt: string;
    selectContentTypeCodeTxt: string;
    deadLineTxt: string;
    filesToUpload: string;
}