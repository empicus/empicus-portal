import { AbstractData } from 'helion-core';

export class PaymentData implements AbstractData {
    code: string = '';
    amount: any = '0.00';
    description: string = '';
}