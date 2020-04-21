import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UiNotificationsEffects, uiNotificationReducer, UiDialogsEffects, uiDialogReducer } from 'helion-ui-notifications';
import { ActionQueueEffects, actionQueueReducer } from 'helion-core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('mainReducers', [
      actionQueueReducer,
      uiDialogReducer,
      uiNotificationReducer
    ]),
    EffectsModule.forFeature([
      ActionQueueEffects,
      UiDialogsEffects,
      UiNotificationsEffects
    ]),
  ]
})
export class MainModule { }

