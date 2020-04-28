import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalPathogenRoutingModule } from './portal-pathogen.routing.module';
import { PathogenListContainerComponent } from './components/containers/pathogen-list-container/pathogen-list-container.component';
import { PathogenFormWidgetComponent } from './components/widgets/pathogen-form-widget/pathogen-form-widget.component';
import { PathogenFormContainerComponent } from './components/containers/pathogen-form-container/pathogen-form-container.component';
import { PathogenEditWidgetComponent } from './components/widgets/pathogen-edit-widget/pathogen-edit-widget.component';
import { PathogenEditContainerComponent } from './components/containers/pathogen-edit-container/pathogen-edit-container.component';
import { PathogenDetailsWidgetComponent } from './components/widgets/pathogen-details-widget/pathogen-details-widget.component';
import { PathogenDetailsContainerComponent } from './components/containers/pathogen-details-container/pathogen-details-container.component';
import { PathogenFormEffects } from './store/effects/pathogen-form/pathogen-form.effects';
import { PathogenEditEffects } from './store/effects/pathogen-edit/pathogen-edit.effects';
import { pathogenFormReducer } from './store/reducers/pathogen-form/pathogen-form.reducer';
import { pathogenEditReducer } from './store/reducers/pathogen-edit/pathogen-edit.reducer';

@NgModule({
    declarations: [
        PathogenListContainerComponent,
        PathogenFormWidgetComponent,
        PathogenFormContainerComponent,
        PathogenEditWidgetComponent,
        PathogenEditContainerComponent,
        PathogenDetailsWidgetComponent,
        PathogenDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalPathogenRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('pathogenFormStateReducer', [
            pathogenFormReducer,
            pathogenEditReducer
        ]),
        EffectsModule.forFeature([
            PathogenFormEffects,
            PathogenEditEffects
        ]),
    ],
    exports: [
        PathogenListContainerComponent,
        PathogenFormWidgetComponent,
        PathogenFormContainerComponent,
        PathogenEditWidgetComponent,
        PathogenEditContainerComponent,
        PathogenDetailsWidgetComponent,
        PathogenDetailsContainerComponent
    ]
})
export class PortalPathogenModule { }
