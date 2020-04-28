import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalPostRoutingModule } from './portal-post.routing.module';
import { PostListContainerComponent } from './components/containers/post-list-container/post-list-container.component';
import { PostFormWidgetComponent } from './components/widgets/post-form-widget/post-form-widget.component';
import { PostFormContainerComponent } from './components/containers/post-form-container/post-form-container.component';
import { PostEditWidgetComponent } from './components/widgets/post-edit-widget/post-edit-widget.component';
import { PostEditContainerComponent } from './components/containers/post-edit-container/post-edit-container.component';
import { PostDetailsWidgetComponent } from './components/widgets/post-details-widget/post-details-widget.component';
import { PostDetailsContainerComponent } from './components/containers/post-details-container/post-details-container.component';
import { PostFormEffects } from './store/effects/post-form/post-form.effects';
import { PostEditEffects } from './store/effects/post-edit/post-edit.effects';
import { postFormReducer } from './store/reducers/post-form/post-form.reducer';
import { postEditReducer } from './store/reducers/post-edit/post-edit.reducer';

@NgModule({
    declarations: [
        PostListContainerComponent,
        PostFormWidgetComponent,
        PostFormContainerComponent,
        PostEditWidgetComponent,
        PostEditContainerComponent,
        PostDetailsWidgetComponent,
        PostDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalPostRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('postFormStateReducer', [
            postFormReducer,
            postEditReducer
        ]),
        EffectsModule.forFeature([
            PostFormEffects,
            PostEditEffects
        ]),
    ],
    exports: [
        PostListContainerComponent,
        PostFormWidgetComponent,
        PostFormContainerComponent,
        PostEditWidgetComponent,
        PostEditContainerComponent,
        PostDetailsWidgetComponent,
        PostDetailsContainerComponent
    ]
})
export class PortalPostModule { }
