import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ConversationFormData } from '../../../data/conversation-form/conversation-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitConversationFormRequestAction = createAction('[Conversation] ConversationForm Request', props<{data: ConversationFormData}>());

export const submitConversationFormSuccessAction = createAction('[Conversation] ConversationForm Request Success', props<{data: ArtifactData}>());

export const submitConversationFormFailureAction = createAction('[Conversation] ConversationForm Request Error', props<{data: ErrorData}>());

