import { AbstractData, ArtifactData } from 'helion-core';
import { ServiceOrderData } from '../../../data/service-order/service-order.data';


/**
 * Defines the state of our ui
 */
export interface ServiceOrderState extends AbstractData {
    acceptData: ArtifactData,
    serviceOrder: ServiceOrderData
}

/**
 * The initial state of our menu is closed
 */
export const initialServiceOrderState: ServiceOrderState = {
    acceptData: new ArtifactData(),
    serviceOrder: new ServiceOrderData(),
};
