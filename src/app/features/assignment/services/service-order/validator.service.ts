import { Injectable } from "@angular/core";
import { ServiceOrderData } from '../../data/service-order/service-order.data';

@Injectable()
export class ServiceOrderValidatorService {

    /**
     * 
     * @param serviceOrderData 
     */
    validate(serviceOrderData: ServiceOrderData): ServiceOrderData {
        return serviceOrderData
    }
}