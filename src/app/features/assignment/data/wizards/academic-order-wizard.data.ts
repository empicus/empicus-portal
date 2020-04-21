import { AbstractData } from "helion-core";
import { ServiceOrderData } from '../service-order/service-order.data';

export class AcademicOrderWizardData implements AbstractData {
    typeOfService: string;
    academicLevel: string;
    deadLine: string;
    
    title: string;
    disciple: string;
    academicStyle: string;
    paperDetails: string;

    lineSpacing: string;
    writerLevel: string;
    pageCount: number;
    sourceCount: number;

    includeSummary: boolean = false;
    includePlagReport: boolean = false;
    includeEditorCheck: boolean = false;
    includeSourcesCopy: boolean = false;
    includePrioritySupport: boolean = false;
    
    deadLineTxt: string;
    discipleTxt: string;
    writerLevelTxt: string;
    typeOfServiceTxt: string;
    academicLevelTxt: string;
    academicStyleTxt: string;
    lineSpacingTxt: string;
    
    filesToUpload: any[] = [];

    
}