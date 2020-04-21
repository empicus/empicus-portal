import { AbstractData } from "helion-core";

export interface RangeItem  extends AbstractData  {
    itemValue: any;
    itemText: string;
    itemActive: boolean
}