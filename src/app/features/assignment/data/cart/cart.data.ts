import { AbstractData, ObjectUtils } from 'helion-core';
import BigNumber from 'bignumber.js';

export interface CalculatorItem extends AbstractData {
    textValue: string;
    dataValue: any;
    textDescription?: string;
    quantity?: BigNumber;
    unitCost?: BigNumber;
    totalCost?: BigNumber;

}

export class CartData implements AbstractData {
    items: CalculatorItem[] = [];
    totalCost: BigNumber = new BigNumber(0.00);
    totalUnitCost: BigNumber = new BigNumber(0.00);

    public getItems(): CalculatorItem[] {
        return this.items;
    }

    getItemDataValue(itemKey: string): any {
        let item = this.getItem(itemKey);
        if(item === null)
            return false;
        return item.dataValue;
    }

    /***
     * 
     */
    getItem(itemKey: string): CalculatorItem {
        if(!this.hasItem(itemKey))
            return null;
        return this.items.filter((item: CalculatorItem) => item.textValue === itemKey)[0];
    }
    
    /**
     * 
     * @param item 
     */
    public addItem(item: CalculatorItem){
        if(!this.hasItem(item.textValue))
            this.items.push(item);
        else {
            this.items = this.items.map((orderItem: CalculatorItem) => {
                if(orderItem.textValue !== item.textValue)
                    return orderItem;
                return { ...orderItem, ...item};;
            })
        }
    }

    /**
     * 
     */
    hasItem(itemKey: string): boolean {
        let filteredItems = this.items.filter((item: CalculatorItem) => item.textValue === itemKey);
        return (filteredItems.length > 0);
    }
 }