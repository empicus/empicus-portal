import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalTopicRoutingModule } from './portal-topic.routing.module';
import { TopicListContainerComponent } from './components/containers/topic-list-container/topic-list-container.component';
import { TopicFormWidgetComponent } from './components/widgets/topic-form-widget/topic-form-widget.component';
import { TopicFormContainerComponent } from './components/containers/topic-form-container/topic-form-container.component';
import { TopicEditWidgetComponent } from './components/widgets/topic-edit-widget/topic-edit-widget.component';
import { TopicEditContainerComponent } from './components/containers/topic-edit-container/topic-edit-container.component';
import { TopicDetailsWidgetComponent } from './components/widgets/topic-details-widget/topic-details-widget.component';
import { TopicDetailsContainerComponent } from './components/containers/topic-details-container/topic-details-container.component';
import { TopicFormEffects } from './store/effects/topic-form/topic-form.effects';
import { TopicEditEffects } from './store/effects/topic-edit/topic-edit.effects';
import { topicFormReducer } from './store/reducers/topic-form/topic-form.reducer';
import { topicEditReducer } from './store/reducers/topic-edit/topic-edit.reducer';

@NgModule({
    declarations: [
        TopicListContainerComponent,
        TopicFormWidgetComponent,
        TopicFormContainerComponent,
        TopicEditWidgetComponent,
        TopicEditContainerComponent,
        TopicDetailsWidgetComponent,
        TopicDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalTopicRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('topicFormStateReducer', [
            topicFormReducer,
            topicEditReducer
        ]),
        EffectsModule.forFeature([
            TopicFormEffects,
            TopicEditEffects
        ]),
    ],
    exports: [
        TopicListContainerComponent,
        TopicFormWidgetComponent,
        TopicFormContainerComponent,
        TopicEditWidgetComponent,
        TopicEditContainerComponent,
        TopicDetailsWidgetComponent,
        TopicDetailsContainerComponent
    ]
})
export class PortalTopicModule { }
