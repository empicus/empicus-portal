import { AbstractData } from "helion-core";

export interface ListItem  extends AbstractData  {
    itemValue: any;
    itemText: string;
    itemActive: boolean
    callbackFunction?: Function
}