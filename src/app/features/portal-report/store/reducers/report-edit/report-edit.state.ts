import { AbstractData } from 'helion-core';
import { ReportEditData } from '../../../data/report-edit/report-edit.data';


/**
 * Defines the state of our ui
 */
export interface ReportEditState extends AbstractData {
    userTask: ReportEditData
}

/**
 * The initial state of our menu is closed
 */
export const initialReportEditState: ReportEditState = {
    userTask: new ReportEditData()
};
