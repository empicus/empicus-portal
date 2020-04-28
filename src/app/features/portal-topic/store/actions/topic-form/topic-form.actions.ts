import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { TopicFormData } from '../../../data/topic-form/topic-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitTopicFormRequestAction = createAction('[Topic] TopicForm Request', props<{data: TopicFormData}>());

export const submitTopicFormSuccessAction = createAction('[Topic] TopicForm Request Success', props<{data: ArtifactData}>());

export const submitTopicFormFailureAction = createAction('[Topic] TopicForm Request Error', props<{data: ErrorData}>());

