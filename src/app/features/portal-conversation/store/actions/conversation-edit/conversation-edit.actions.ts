import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ConversationEditData } from '../../../data/conversation-edit/conversation-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitConversationEditRequestAction = createAction('[Conversation] ConversationEdit Request', props<{data: ConversationEditData}>());

export const submitConversationEditSuccessAction = createAction('[Conversation] ConversationEdit Request Success', props<{data: ArtifactData}>());

export const submitConversationEditFailureAction = createAction('[Conversation] ConversationEdit Request Error', props<{data: ErrorData}>());

