
import { AbstractData } from 'helion-core';
import BigNumber from 'bignumber.js';

export class ServiceOrderData implements AbstractData {
    /**
     * The type of service order ACADEMIC/CONTENT
     */
    serviceOrderType: string;
    typeOfService: string;
    contentType: string;
    discipline: string;
    academicStyle: string;
    title: string;
    paperDetails: string;
    academicLevel: string;
    writerLevel: string;
    deadLine: string;
    keyWords: string;
    wordCount: number;
    pageCount: number;
    lineSpacing: string;
    sourceCount: number;
    useBalance: boolean;
    discountCode: string;
    total: BigNumber;

    includeSummary: boolean = false;
    includePlagReport: boolean = false;
    includeEditorCheck: boolean = false;
    includeSourcesCopy: boolean = false;
    includePrioritySupport: boolean = false;
    
    filesToUpload: any[] = [];

}