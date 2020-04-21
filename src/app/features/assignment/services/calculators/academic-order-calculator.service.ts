import BigNumber from 'bignumber.js';
import { Injectable } from '@angular/core';
import { CartData } from '../../data/cart/cart.data';
import { StringUtils, ObjectUtils } from 'helion-core';
import { AcademicOrderWizardData } from '../../data/wizards/academic-order-wizard.data';

@Injectable()
export class AcademicOrderCalculatorService {

    private summaryCost = new BigNumber(18.99);
    private plagReportCost = new BigNumber(9.49);
    private editorCheckCost = new BigNumber(4.74);
    private copyOfSourcesCost = new BigNumber(9.49);
    private prioritySupportCost = new BigNumber(9.49);
    
    /**
     * 
     * @param cartData 
     */
    public calculate(orderData: AcademicOrderWizardData): CartData {
        let cartData = this.toCartData(orderData);
        cartData = this.doCalculate(cartData);
        cartData = this.doCalculateExtraServices(cartData);
        cartData = this.applyDiscount(cartData);
        return cartData;
    }

    /**
     * 
     * @param orderData 
     */
    toCartData(orderData: AcademicOrderWizardData): CartData {
        let cartData = new CartData();
        cartData.addItem({textValue: 'deadLine', dataValue: orderData.deadLine});
        cartData.addItem({textValue: 'disciple', dataValue: orderData.disciple});
        cartData.addItem({textValue: 'writerLevel', dataValue: orderData.writerLevel});
        cartData.addItem({textValue: 'typeOfService', dataValue: orderData.typeOfService});
        cartData.addItem({textValue: 'academicLevel', dataValue: orderData.academicLevel});
        cartData.addItem({textValue: 'pageCount', dataValue: orderData.pageCount});
        cartData.addItem({textValue: 'includeSummary', dataValue: orderData.includeSummary});
        cartData.addItem({textValue: 'includePlagReport', dataValue: orderData.includePlagReport});
        cartData.addItem({textValue: 'includeEditorCheck', dataValue: orderData.includeEditorCheck});
        cartData.addItem({textValue: 'includeSourcesCopy', dataValue: orderData.includeSourcesCopy});
        cartData.addItem({textValue: 'includePrioritySupport', dataValue: orderData.includePrioritySupport});
        return cartData;
    }

    /**
     * 
     * @param cartData 
     */
    doCalculate(cartData: CartData) 
    {
        if(cartData.items.length === 0) return cartData;
        let factor = new BigNumber(6);
        let urgencyCost = this.doUrgencyCost(cartData);
        let subjectCost = this.doSubjectAreaCost(cartData);
        let serviceCost = this.doTypeOfServiceCost(cartData);
        let writerLevelCost = this.doWriterLevelCost(cartData);
        let academicLevelCost = this.doAcademicLevelCost(cartData);
        let noOfPages = (ObjectUtils.isValid(cartData.getItem('pageCount').dataValue)) ? cartData.getItem('pageCount').dataValue : 1;
        
        cartData.totalCost = factor.multipliedBy(serviceCost)
            .multipliedBy(subjectCost)
            .multipliedBy(academicLevelCost)
            .multipliedBy(writerLevelCost)
            .multipliedBy(noOfPages)
            .multipliedBy(urgencyCost)
        
        if(!cartData.totalCost.eq(new BigNumber(0))){
            if(noOfPages !== 0) {
                cartData.totalUnitCost = cartData.totalCost
                    .div(new BigNumber(noOfPages));
            }
        }
        else {
            cartData.totalUnitCost = new BigNumber(0);
        }
        return cartData;
    }

    /**
     * 
     * @param cartData 
     */
    doCalculateExtraServices(cartData: CartData) {
        let zero = new BigNumber(0.00);
        let summaryCost = (cartData.getItemDataValue('summary')) ? this.getSummaryCost() : zero;
        let plagReportCost = (cartData.getItemDataValue('plagReport')) ? this.getPlagReportCost() : zero;
        let editorCheckCost = (cartData.getItemDataValue('editorCheck')) ? this.getEditorCheckCost() : zero;
        let copyOfSourcesCost = (cartData.getItemDataValue('sourcesCopy')) ? this.getCopyOfSourcesCost() : zero;
        let prioritySupportCost = (cartData.getItemDataValue('prioritySupport')) ? this.getPrioritySupportCost() : zero;

        cartData.totalCost = cartData.totalCost
            .plus(summaryCost)
            .plus(plagReportCost)
            .plus(editorCheckCost)
            .plus(copyOfSourcesCost)
            .plus(prioritySupportCost)
        
        return cartData;
    }
    /**
     * 
     * @param cartData 
     */
    applyDiscount(cartData: CartData): CartData {
        return cartData;
    }

    /**CartData
     * 
     * @param typeOfServiceCode 
     */
    doTypeOfServiceCost(cartData: CartData): BigNumber {
        let serviceCost = new BigNumber(1.00);
        let typeOfServiceCode = cartData.getItemDataValue('typeOfService');
        if(!StringUtils.isString(typeOfServiceCode)) 
            typeOfServiceCode = 'ESSAY';

        if (typeOfServiceCode === 'ESSAY')
            return serviceCost
        else if (typeOfServiceCode === 'RESEARCH_PAPER')
            return serviceCost
        else if (typeOfServiceCode === 'TERM_PAPER') 
            serviceCost = new BigNumber(1.20)
        else if (typeOfServiceCode === 'CASE_STUDY') 
            serviceCost = new BigNumber(1.12)
        return serviceCost;
    }

    /**
     * 
     * @param subjectCode 
     */
    doSubjectAreaCost(cartData: CartData): BigNumber  {
        let subjectAreaCost = new BigNumber(1.00);
        let subjectCode = cartData.getItemDataValue('disciple');

        if(StringUtils.isString(subjectCode))
            subjectAreaCost = new BigNumber(1.20)
        return subjectAreaCost
    }

    /**
     * 
     * @param academicLevelCode 
     */
    doAcademicLevelCost(cartData: CartData): BigNumber{
        let academicLevelCost = new BigNumber(1.00);
        let academicLevelCode = cartData.getItemDataValue('academicLevel');

        if(!academicLevelCode)
            academicLevelCode = 'HIGH_SCHOOL';

        if (academicLevelCode === 'HIGH_SCHOOL') {
            academicLevelCost = academicLevelCost;
        } else if (academicLevelCode === 'UNDER_GRAD_A') {
            academicLevelCost = new BigNumber(1.20)
        } else if (academicLevelCode === 'UNDER_GRAD_B') {
            academicLevelCost = new BigNumber(1.30)
        } else if (academicLevelCode === 'MASTER') {
            academicLevelCost = new BigNumber(1.40)
        }else if (academicLevelCode === 'PHD') {
            academicLevelCost = new BigNumber(1.50)
        }
        return academicLevelCost;
    }

    /**
     * 
     * @param academicLevelCode 
     */
    doWriterLevelCost(cartData: CartData) {
        let writerLevelCost = new BigNumber(1.00);
        let writerLevelCode = cartData.getItemDataValue('writerLevel');

        if(!writerLevelCode)
            writerLevelCode = 'STANDARD';

        if (writerLevelCode === 'STANDARD') 
            writerLevelCost = writerLevelCost;
        else if (writerLevelCode === 'TOP_WRITER') 
            writerLevelCost = new BigNumber(1.20)

        return writerLevelCost;
    }

    /**
     * 
     * @param dueDate 
     */
    doUrgencyCost(cartData: CartData): BigNumber {
        let urgencyCost = new BigNumber(1.00)
        let hours = new BigNumber(cartData.getItemDataValue('deadLine'));
        
        if (hours.isLessThanOrEqualTo(6)) {
            urgencyCost = new BigNumber(3.00)
        } else if (hours.isGreaterThan(6) && hours.isLessThanOrEqualTo(12)) {
            urgencyCost = new BigNumber(2.60)
        } else if (hours.isGreaterThan(12) && hours.isLessThanOrEqualTo(24)) {
            urgencyCost = new BigNumber(2.20)
        } else if (hours.isGreaterThan(24) && hours.isLessThanOrEqualTo(47)) {
            urgencyCost = new BigNumber(1.90)
        } else if (hours.isGreaterThan(47) && hours.isLessThanOrEqualTo(168)) {
            urgencyCost = new BigNumber(1.75)
        } else {
            urgencyCost = new BigNumber(1.65)
        } 
        return urgencyCost;
    }


    /**
     * 
     */
    getPlagReportCost(): BigNumber {
        return this.plagReportCost;
    }
    
    /**
     * 
     */
    getEditorCheckCost(): BigNumber{
        return this.editorCheckCost;
    }

    /**
     * 
     */
    getCopyOfSourcesCost(): BigNumber {
        return this.copyOfSourcesCost
    }

    /**
     * 
     */
    getSummaryCost(): BigNumber {
        return this.summaryCost;
    }

    /**
     * 
     */
    getPrioritySupportCost(): BigNumber {
        return this.prioritySupportCost;
    }
}