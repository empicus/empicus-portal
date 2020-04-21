
import { ErrorData, ArtifactData } from 'helion-core';
import { ServiceOrderState } from './service-order.state';
import { ServiceOrderData } from '../../../data/service-order/service-order.data';
import { PaymentData } from '../../../../portal-shared/data/payment.data';

/**
 * @param state
 * @param action
 */
export const onSubmitServiceOrderRequestEvent = (state: ServiceOrderState, data: ServiceOrderData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitServiceOrderSuccessEvent = (state: ServiceOrderState, data: ArtifactData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitServiceOrderFailureEvent = (state: ServiceOrderState, data: ErrorData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitClientPaymentRequestEvent = (state: ServiceOrderState, data: PaymentData): ServiceOrderState => {
    return { ...state };
};


/**
 * @param state
 * @param action
 */
export const onSubmitClientPaymentSuccessEvent = (state: ServiceOrderState, data: ArtifactData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitClientPaymentFailureEvent = (state: ServiceOrderState, data: ErrorData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcceptServiceOrderRequestEvent = (state: ServiceOrderState, data: ArtifactData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcceptServiceOrderSuccessEvent = (state: ServiceOrderState, data: ArtifactData): ServiceOrderState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitAcceptServiceOrderFailureEvent = (state: ServiceOrderState, data: ErrorData): ServiceOrderState => {
    return { ...state };
};