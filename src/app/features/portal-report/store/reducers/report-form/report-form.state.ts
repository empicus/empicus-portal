import { AbstractData } from 'helion-core';
import { ReportFormData } from '../../../data/report-form/report-form.data';


/**
 * Defines the state of our ui
 */
export interface ReportFormState extends AbstractData {
    userTask: ReportFormData
}

/**
 * The initial state of our menu is closed
 */
export const initialReportFormState: ReportFormState = {
    userTask: new ReportFormData()
};
