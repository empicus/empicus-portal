import { createReducer, on, Action } from "@ngrx/store";
import { ServiceOrderState, initialServiceOrderState } from "./service-order.state";
import *  as fromServiceOrderReducerFunctions from './service-order.reducer.functions'
import * as fromServiceOrderActions from "../../actions/service-order.actions";

const reducer = createReducer(
    initialServiceOrderState,
    on(fromServiceOrderActions.submitServiceOrderRequestAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitServiceOrderRequestEvent(state, data)),
    on(fromServiceOrderActions.submitServiceOrderSuccessAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitServiceOrderSuccessEvent(state, data)),
    on(fromServiceOrderActions.submitServiceOrderFailureAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitServiceOrderFailureEvent(state, data)),

    on(fromServiceOrderActions.submitConfirmClientPaymentRequestAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitClientPaymentRequestEvent(state, data)),
    on(fromServiceOrderActions.submitConfirmClientPaymentSuccessAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitClientPaymentSuccessEvent(state, data)),
    on(fromServiceOrderActions.submitConfirmClientPaymentFailureAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitClientPaymentFailureEvent(state, data)),

    on(fromServiceOrderActions.submitAcceptServiceOrderRequestAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitAcceptServiceOrderRequestEvent(state, data)),
    on(fromServiceOrderActions.submitAcceptServiceOrderSuccessAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitAcceptServiceOrderSuccessEvent(state, data)),
    on(fromServiceOrderActions.submitAcceptServiceOrderFailureAction, (state, { data }) => fromServiceOrderReducerFunctions.onSubmitAcceptServiceOrderFailureEvent(state, data))
);

export function serviceOrderReducer(state: ServiceOrderState | undefined, action: Action) {
    return reducer(state, action);
}

