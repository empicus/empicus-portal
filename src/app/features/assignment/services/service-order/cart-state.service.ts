import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { PortalAssignmentModuleState, getAowCartDataSelector, getAcademicOrderWizardDataSelector } from "../../store/assignment-module.state";
import { CartData } from "../../data/cart/cart.data";
import { ServiceOrderData } from '../../data/service-order/service-order.data';


@Injectable()
export class CartDataStateService {
    
    private cartData: CartData;

    constructor(private store: Store<PortalAssignmentModuleState>){
        this.getCartDataState();
    }

    /**
     * 
     */
    getCartData(): CartData{
        return this.cartData;
    }
    
    /**
     * 
     * @param serviceOrderData 
     */
    updatePricing(serviceOrderData: ServiceOrderData): ServiceOrderData {
        serviceOrderData.total = this.cartData.totalCost;
        return serviceOrderData
    }

    /**
     * 
     */
    getCartDataState() {
        this.store.select(getAowCartDataSelector).subscribe((cartData) => {
            this.cartData = cartData;
        });
    }

}