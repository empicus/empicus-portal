import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalDiseaseCaseRoutingModule } from './portal-disease-case.routing.module';
import { DiseaseCaseListContainerComponent } from './components/containers/disease-case-list-container/disease-case-list-container.component';
import { DiseaseCaseFormWidgetComponent } from './components/widgets/disease-case-form-widget/disease-case-form-widget.component';
import { DiseaseCaseFormContainerComponent } from './components/containers/disease-case-form-container/disease-case-form-container.component';
import { DiseaseCaseEditWidgetComponent } from './components/widgets/disease-case-edit-widget/disease-case-edit-widget.component';
import { DiseaseCaseEditContainerComponent } from './components/containers/disease-case-edit-container/disease-case-edit-container.component';
import { DiseaseCaseDetailsWidgetComponent } from './components/widgets/disease-case-details-widget/disease-case-details-widget.component';
import { DiseaseCaseDetailsContainerComponent } from './components/containers/disease-case-details-container/disease-case-details-container.component';
import { DiseaseCaseFormEffects } from './store/effects/disease-case-form/disease-case-form.effects';
import { DiseaseCaseEditEffects } from './store/effects/disease-case-edit/disease-case-edit.effects';
import { diseaseCaseFormReducer } from './store/reducers/disease-case-form/disease-case-form.reducer';
import { diseaseCaseEditReducer } from './store/reducers/disease-case-edit/disease-case-edit.reducer';

@NgModule({
    declarations: [
        DiseaseCaseListContainerComponent,
        DiseaseCaseFormWidgetComponent,
        DiseaseCaseFormContainerComponent,
        DiseaseCaseEditWidgetComponent,
        DiseaseCaseEditContainerComponent,
        DiseaseCaseDetailsWidgetComponent,
        DiseaseCaseDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalDiseaseCaseRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('disease-caseFormStateReducer', [
            diseaseCaseFormReducer,
            diseaseCaseEditReducer
        ]),
        EffectsModule.forFeature([
            DiseaseCaseFormEffects,
            DiseaseCaseEditEffects
        ]),
    ],
    exports: [
        DiseaseCaseListContainerComponent,
        DiseaseCaseFormWidgetComponent,
        DiseaseCaseFormContainerComponent,
        DiseaseCaseEditWidgetComponent,
        DiseaseCaseEditContainerComponent,
        DiseaseCaseDetailsWidgetComponent,
        DiseaseCaseDetailsContainerComponent
    ]
})
export class PortalDiseaseCaseModule { }
