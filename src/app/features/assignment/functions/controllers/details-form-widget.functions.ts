import { FormGroup } from '@angular/forms';
import { UiEventData } from 'helion-ui-components';
import * as assignmentConstants from '../../util/client-order.constants';
import * as contentOrderActions from '../../store/actions/content-order-wizard.actions';
import * as academicOrderActions from '../../store/actions/academic-order-wizard.actions';
import * as serviceOrderActions from '../../store/actions/service-order.actions';
import { EntityData, FORM_SUBMISSION_SUCCESS } from 'helion-ui-forms';
import { AcademicOrderWizardData } from '../../data/wizards/academic-order-wizard.data';
import { ServiceOrderData } from '../../data/service-order/service-order.data';
import { ContentOrderWizardData } from '../../data/wizards/content-order-wizard.data';
import { ObjectUtils } from 'helion-core';

/**
 * For event handlers
 *  
 */
export const onTypeOfServiceSelectedEvent =  function (eventData: UiEventData) {
    if(eventData.eventType === 'closeTypeOfServiceList') {
        this.showExtraWritingTypes = false;
        return;
    }
    if (eventData.eventData.itemValue === 'OTHER')
        this.showExtraWritingTypes = (this.showExtraWritingTypes) ? false : true;
    else {
        this['aowCalculate'](eventData, 'typeOfService')
    }
}

/**
 * 
 * @param data 
 */
export const onDetailsFormSubmitSuccess = function(data: EntityData) {
    this['aowCalculateImpl']('title', data['title'], 'Title');
    this['aowCalculateImpl']('disciple', data['disciple'], 'Discipline');
    this['aowCalculateImpl']('academicStyle', data['academicStyle'], 'Style');
    this['aowCalculateImpl']('writerLevel', data['writerLevel'], 'Writer Level');
    this['aowCalculateImpl']('sourceCount', data['sourceCount'], 'Source Count');
    this['aowCalculateImpl']('lineSpacing', data['lineSpacing'], 'Line Spacing');
    this['aowCalculateImpl']('pageCount', data['pageCount'], 'Page Count');
    this['aowCalculateImpl']('paperDetails', data['paperDetails'], 'Details');

    this.uiComponent.emit({ eventData: data, eventType: FORM_SUBMISSION_SUCCESS })
}

/**
 * 
 * @param data 
 */
export const onContentInfoFormSubmitSuccess = function(data: EntityData) {
    console.log('onContentInfoFormSubmitSuccess###########', data);
    this['cowCalculateImpl']('title', data['title'], 'Title');
    this['cowCalculateImpl']('contentType', data['contentType'], 'Content Type');
    this['cowCalculateImpl']('keyWords', data['keyWords'], 'Keywords');
    this.uiComponent.emit({ eventData: data, eventType: FORM_SUBMISSION_SUCCESS })
}

/**
 * 
 * @param data 
 */
export const onContentDetailsFormSubmitSuccess = function(data: EntityData) {
    this['cowCalculateImpl']('writerLevel', data['writerLevel'], 'Writer Level');
    this['cowCalculateImpl']('sourceCount', data['sourceCount'], 'Source Count');
    this['cowCalculateImpl']('wordCount', data['wordCount'], 'Word Count');
    this['cowCalculateImpl']('paperDetails', data['paperDetails'], 'Details');
    this.uiComponent.emit({ eventData: data, eventType: FORM_SUBMISSION_SUCCESS })
}

/**
 * Function to dispatch action that leads to 
 * calculation of academic order cost.
 * 
 * @param eventData 
 * @param fieldName 
 */
export const aowCalculate = function(eventData: UiEventData, fieldName: string) {
    let data = eventData.eventData 
    this['aowCalculateImpl'](fieldName, data.itemValue, data.itemText);
}

/**
 * Function to dispatch action that leads to 
 * calculation of academic order cost.
 * 
 * @param eventData 
 * @param fieldName 
 */
export const aowCalculateImpl = function(fieldName: string, fieldValue: any, fieldText: string) { 
    this.academicOrderWizardData[fieldName] = fieldValue, 
    this.academicOrderWizardData[fieldName + 'Txt'] = fieldText
    // Update the angular form with the new value
    patchValue(this.form, fieldName, fieldValue);

    this['uiComponent'].store.dispatch(
        academicOrderActions.calculateAowCostAction({ data: this.academicOrderWizardData }));
}

/**
 * 
 */
export const listenForDataFormChanges = function(fieldName: string, fieldText: string) {
    let that = this;
    this['form'].get(fieldName).valueChanges.subscribe((value) => {
        that['academicOrderWizardData'][fieldName] = value; 
        that['academicOrderWizardData'][fieldName + 'Txt'] = fieldText;
        that['uiComponent'].store.dispatch(
            academicOrderActions.calculateAowCostAction({ data: that['academicOrderWizardData'] }));
    });
}

/**
 * Helper function to patch a form control value
 * @param form 
 * @param fieldName 
 * @param fieldValue 
 */
export const patchValue = function(form: FormGroup, fieldName: string, fieldValue: any) {
    let data = {};
    data[fieldName] = fieldValue;
    form.patchValue(data);
}

/**
 * Container level function to calculate content order cost
 * @param eventData 
 * @param fieldName 
 */
export const cowCalculate = function(eventData: UiEventData, fieldName: string) { 
    let data = eventData.eventData 
    this['cowCalculateImpl'](fieldName, data.itemValue, data.itemText);
}

/**
 * Container level function to calculate content order cost
 * @param eventData 
 * @param fieldName 
 */
export const cowCalculateImpl = function(fieldName: string, fieldValue: any, fieldText: string) { 
    this.contentOrderWizardData[fieldName] = fieldValue; 
    this.contentOrderWizardData[fieldName + 'Txt'] = fieldText; 

    // Update the angular form with the new value
    patchValue(this.form, fieldName, fieldValue);

    this['uiComponent'].store.dispatch(
        contentOrderActions.calculateCowCostAction({ data: this.contentOrderWizardData }));
}

/**
 * Widget level form state transition function
 * @param state 
 */
export const transitionTo = function(state: string) {

    let eventData = ObjectUtils.isValid(this.academicOrderWizardData) ? this.academicOrderWizardData : this.contentOrderWizardData;

    if(state === assignmentConstants.FORM_STATE_INFO)
        this['uiComponent'].emit(
            { eventType: assignmentConstants.TRANSITION_TO_INFO_STATE, eventData: eventData });
    
    if(state === assignmentConstants.FORM_STATE_DETAILS)
        this['uiComponent'].emit(
            { eventType: assignmentConstants.TRANSITION_TO_DETAILS_STATE, eventData: eventData });
    
    if(state === assignmentConstants.FORM_STATE_DATA)
        this['uiComponent'].emit(
            { eventType: assignmentConstants.TRANSITION_TO_DATA_STATE, eventData: eventData });

    if(state === assignmentConstants.FORM_STATE_INVOICE)
        this['uiComponent'].emit(
            { eventType: assignmentConstants.TRANSITION_TO_INVOICE_STATE, eventData: eventData });
}

/**
 * Transition functions for the academic and content wizards
 * @param uiEventData 
 */
export const transitionToInfoForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(academicOrderActions.showAowInfoFormAction({ data: uiEventData.eventData }));
}

export const transitionToDetailsForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(academicOrderActions.showAowDetailFormAction({ data: uiEventData.eventData }));
}

export const transitionToDataForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(academicOrderActions.showAowDataFormAction({ data: uiEventData.eventData }));
}

export const transitionToInvoiceForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(academicOrderActions.showAowInvoiceFormAction({ data: uiEventData.eventData }));
}

export const transitionToContentInfoForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(contentOrderActions.showCowInfoFormAction({ data: uiEventData.eventData }));
}

export const transitionToContentDetailsForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(contentOrderActions.showCowDetailFormAction({ data: uiEventData.eventData }));
}

export const transitionToContentDataForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(contentOrderActions.showCowDataFormAction({ data: uiEventData.eventData }));
}

export const transitionToContentInvoiceForm = function(uiEventData: UiEventData) {
    this['uiComponent'].dispatch(contentOrderActions.showCowInvoiceFormAction({ data: uiEventData.eventData }));
}

/**
 * Functions to submit a content order to the backend
 */
export const submitAcademicOrder = function(uiEventData: UiEventData){
    let serviceOrderData = fromAcademicOrderWizardData(this.academicOrderWizardData);
    this['uiComponent'].dispatch(serviceOrderActions.submitServiceOrderRequestAction({ data: serviceOrderData}));
}

export const submitContentOrder = function(uiEventData: UiEventData){
    let serviceOrderData = fromContentOrderWizardData(this.contentOrderWizardData);
    this['uiComponent'].dispatch(serviceOrderActions.submitServiceOrderRequestAction({ data: serviceOrderData}));
}

/**
 * 
 * @param academicOrderWizardData 
 */
export const fromAcademicOrderWizardData = function(academicOrderWizardData: AcademicOrderWizardData): ServiceOrderData {
    let serviceOrderData = new ServiceOrderData();

    serviceOrderData.serviceOrderType = assignmentConstants.SERVICE_ORDER_TYPE_ACADEMIC;
    serviceOrderData.typeOfService = academicOrderWizardData.typeOfService;
    serviceOrderData.academicLevel = academicOrderWizardData.academicLevel;
    serviceOrderData.deadLine = academicOrderWizardData.deadLine;
    
    serviceOrderData.title = academicOrderWizardData.title;
    serviceOrderData.discipline = academicOrderWizardData.disciple;
    serviceOrderData.academicStyle = academicOrderWizardData.academicStyle;
    serviceOrderData.paperDetails = academicOrderWizardData.paperDetails;

    serviceOrderData.lineSpacing = academicOrderWizardData.lineSpacing;
    serviceOrderData.writerLevel = academicOrderWizardData.writerLevel;
    serviceOrderData.pageCount = academicOrderWizardData.pageCount;
    serviceOrderData.sourceCount = academicOrderWizardData.sourceCount;

    serviceOrderData.includeSummary = academicOrderWizardData.includeSummary;
    serviceOrderData.includePlagReport = academicOrderWizardData.includePlagReport;
    serviceOrderData.includeEditorCheck = academicOrderWizardData.includeEditorCheck;
    serviceOrderData.includeSourcesCopy = academicOrderWizardData.includeSourcesCopy;
    serviceOrderData.includePrioritySupport = academicOrderWizardData.includePrioritySupport;

    serviceOrderData.filesToUpload = academicOrderWizardData.filesToUpload;

    return serviceOrderData;
}

/**
 * 
 * @param contentOrderWizardData 
 */
export const fromContentOrderWizardData = function(contentOrderWizardData: ContentOrderWizardData): ServiceOrderData {
    let serviceOrderData = new ServiceOrderData();
    
    serviceOrderData.serviceOrderType = assignmentConstants.SERVICE_ORDER_TYPE_CONTENT;
    serviceOrderData.title = contentOrderWizardData.title;
    serviceOrderData.contentType = contentOrderWizardData.contentType;
    serviceOrderData.paperDetails = contentOrderWizardData.paperDetails;
    serviceOrderData.deadLine = contentOrderWizardData.deadLine;
    serviceOrderData.keyWords = contentOrderWizardData.keyWords;

    serviceOrderData.writerLevel = contentOrderWizardData.writerLevel;
    serviceOrderData.wordCount = contentOrderWizardData.wordCount;
    serviceOrderData.sourceCount = contentOrderWizardData.sourceCount;

    serviceOrderData.includeSummary = contentOrderWizardData.includeSummary;
    serviceOrderData.includePlagReport = contentOrderWizardData.includePlagReport;
    serviceOrderData.includeEditorCheck = contentOrderWizardData.includeEditorCheck;
    serviceOrderData.includeSourcesCopy = contentOrderWizardData.includeSourcesCopy;
    serviceOrderData.includePrioritySupport = contentOrderWizardData.includePrioritySupport;


    
    return serviceOrderData;
}