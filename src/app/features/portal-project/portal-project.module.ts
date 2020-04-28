import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalProjectRoutingModule } from './portal-project.routing.module';
import { ProjectListContainerComponent } from './components/containers/project-list-container/project-list-container.component';
import { ProjectFormWidgetComponent } from './components/widgets/project-form-widget/project-form-widget.component';
import { ProjectFormContainerComponent } from './components/containers/project-form-container/project-form-container.component';
import { ProjectEditWidgetComponent } from './components/widgets/project-edit-widget/project-edit-widget.component';
import { ProjectEditContainerComponent } from './components/containers/project-edit-container/project-edit-container.component';
import { ProjectDetailsWidgetComponent } from './components/widgets/project-details-widget/project-details-widget.component';
import { ProjectDetailsContainerComponent } from './components/containers/project-details-container/project-details-container.component';
import { ProjectFormEffects } from './store/effects/project-form/project-form.effects';
import { ProjectEditEffects } from './store/effects/project-edit/project-edit.effects';
import { projectFormReducer } from './store/reducers/project-form/project-form.reducer';
import { projectEditReducer } from './store/reducers/project-edit/project-edit.reducer';

@NgModule({
    declarations: [
        ProjectListContainerComponent,
        ProjectFormWidgetComponent,
        ProjectFormContainerComponent,
        ProjectEditWidgetComponent,
        ProjectEditContainerComponent,
        ProjectDetailsWidgetComponent,
        ProjectDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalProjectRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('projectFormStateReducer', [
            projectFormReducer,
            projectEditReducer
        ]),
        EffectsModule.forFeature([
            ProjectFormEffects,
            ProjectEditEffects
        ]),
    ],
    exports: [
        ProjectListContainerComponent,
        ProjectFormWidgetComponent,
        ProjectFormContainerComponent,
        ProjectEditWidgetComponent,
        ProjectEditContainerComponent,
        ProjectDetailsWidgetComponent,
        ProjectDetailsContainerComponent
    ]
})
export class PortalProjectModule { }
