import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ServiceOrderData } from '../../data/service-order/service-order.data';
import { PaymentData } from '../../../portal-shared/data/payment.data';

/**
 * 
 */
export const submitServiceOrderRequestAction = createAction('[Order] Service Order Request', props<{data: ServiceOrderData}>());

export const submitServiceOrderSuccessAction = createAction('[Order] Service Order Request Success', props<{data: ArtifactData}>());

export const submitServiceOrderFailureAction = createAction('[Order] Service Order Request Error', props<{data: ErrorData}>());

/**
 * 
 */
export const submitConfirmClientPaymentRequestAction = createAction('[Order] Confirm Payment Request', props<{data: PaymentData}>());

export const submitConfirmClientPaymentSuccessAction = createAction('[Order] Confirm Payment Request Success', props<{data: ArtifactData}>());

export const submitConfirmClientPaymentFailureAction = createAction('[Order] Confirm Payment Request Error', props<{data: ErrorData}>());


/**
 * 
 */
export const submitAcceptServiceOrderRequestAction = createAction('[Order] Accept Service Order Request', props<{data: ArtifactData}>());

export const submitAcceptServiceOrderSuccessAction = createAction('[Order] Accept Service Order Request Success', props<{data: ArtifactData}>());

export const submitAcceptServiceOrderFailureAction = createAction('[Order] Accept Service Order Request Error', props<{data: ErrorData}>());

