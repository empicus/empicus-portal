import BigNumber from 'bignumber.js';
import { Injectable } from '@angular/core';
import { CartData } from '../../data/cart/cart.data';
import { StringUtils, ObjectUtils } from 'helion-core';
import { ContentOrderWizardData } from '../../data/wizards/content-order-wizard.data';

@Injectable()
export class ContentOrderCalculatorService {

    /**
     * 
     * @param cartData 
     */
    public calculate(orderData: ContentOrderWizardData): CartData {
        let cartData = this.toCartData(orderData);
        cartData = this.doCalculate(cartData);
        cartData = this.applyDiscount(cartData);
        return cartData;
    }

    /**
     * 
     * @param orderData 
     */
    toCartData(orderData: ContentOrderWizardData): CartData {
        let cartData = new CartData();
        cartData.addItem({ textValue: 'deadLine', dataValue: orderData.deadLine });
        cartData.addItem({ textValue: 'wordCount', dataValue: orderData.wordCount });
        cartData.addItem({ textValue: 'selectContentTypeCode', dataValue: orderData.selectContentTypeCodeTxt });
        return cartData;
    }

    /**
     * 
     * @param cartData 
     */
    doCalculate(cartData: CartData) {
        if (cartData.items.length === 0) return cartData;
        let factor = new BigNumber(6);
        let urgencyCost = this.doUrgencyCost(cartData);
        let subjectCost = this.doWordCount(cartData);
        let serviceCost = this.doTypeOfServiceCost(cartData);

        cartData.totalCost = factor.multipliedBy(serviceCost)
            .multipliedBy(subjectCost)
            .multipliedBy(urgencyCost)

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
        if (!StringUtils.isString(typeOfServiceCode))
            typeOfServiceCode = 'ARTICLE';

        if (typeOfServiceCode === 'BLOG_CONTENT')
            serviceCost = new BigNumber(1.65)
        else if (typeOfServiceCode === 'TECHNICAL_WRITING')
            serviceCost = new BigNumber(2.20)
        else if (typeOfServiceCode === 'CREATIVE_WRITING')
            serviceCost = new BigNumber(1.20)
        else if (typeOfServiceCode === 'ARTICLE')
            serviceCost = new BigNumber(1.12)
        else if (typeOfServiceCode === 'COPY_WRITING')
            serviceCost = new BigNumber(1.22)
        else if (typeOfServiceCode === 'WEB_CONTENT')
            serviceCost = new BigNumber(1.32)
        else if (typeOfServiceCode === 'JOURNAL_WRITING')
            serviceCost = new BigNumber(1.42)
        else if (typeOfServiceCode === 'PRESS_RELEASE')
            serviceCost = new BigNumber(1.52)
        else if (typeOfServiceCode === 'E_BOOK')
            serviceCost = new BigNumber(1.62)
        else if (typeOfServiceCode === 'PRODUCT_DESCRIPTION')
            serviceCost = new BigNumber(1.72)
        else if (typeOfServiceCode === 'BOOK_REVIEW')
            serviceCost = new BigNumber(1.82)
        else if (typeOfServiceCode === 'EMAIL_NEWSLETTER')
            serviceCost = new BigNumber(1.92)
        else if (typeOfServiceCode === 'TAGLINE_SLOGAN')
            serviceCost = new BigNumber(2.00)
        return serviceCost;
    }

    /**
     * 
     * @param academicLevelCode 
     */
    doWordCount(cartData: CartData): BigNumber {
        let academicLevelCode = 
            (ObjectUtils.isValid(cartData.getItemDataValue('wordCount'))) 
                ? new BigNumber(cartData.getItemDataValue('wordCount')) : new BigNumber(200);
        
        return (academicLevelCode.isLessThan(200)) 
            ? new BigNumber(10) : academicLevelCode.dividedBy(20);
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


}