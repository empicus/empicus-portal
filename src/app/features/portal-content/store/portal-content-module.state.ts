import { ActionReducerMap } from "@ngrx/store";
import { ContentOrderFormState } from './reducers/content-order-form/content-order-form.state';
import { ContentOrderEditState } from './reducers/content-order-edit/content-order-edit.state';
import * as fromContentOrderFormReducer from "./reducers/content-order-form/content-order-form.reducer";
import * as fromContentOrderEditReducer from "./reducers/content-order-edit/content-order-edit.reducer";


/**
 * State of application
 */
export interface PortalContentModuleState {
    contentOrderFormState: ContentOrderFormState,
    contentOrderEditState: ContentOrderEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalContentModuleState> = {
    contentOrderFormState: fromContentOrderFormReducer.contentOrderFormReducer,
    contentOrderEditState: fromContentOrderEditReducer.contentOrderEditReducer,
};



