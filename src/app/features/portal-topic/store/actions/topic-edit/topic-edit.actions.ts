import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { TopicEditData } from '../../../data/topic-edit/topic-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitTopicEditRequestAction = createAction('[Topic] TopicEdit Request', props<{data: TopicEditData}>());

export const submitTopicEditSuccessAction = createAction('[Topic] TopicEdit Request Success', props<{data: ArtifactData}>());

export const submitTopicEditFailureAction = createAction('[Topic] TopicEdit Request Error', props<{data: ErrorData}>());

