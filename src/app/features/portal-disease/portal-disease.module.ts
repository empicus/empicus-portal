import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalDiseaseRoutingModule } from './portal-disease.routing.module';
import { DiseaseListContainerComponent } from './components/containers/disease-list-container/disease-list-container.component';
import { DiseaseFormWidgetComponent } from './components/widgets/disease-form-widget/disease-form-widget.component';
import { DiseaseFormContainerComponent } from './components/containers/disease-form-container/disease-form-container.component';
import { DiseaseEditWidgetComponent } from './components/widgets/disease-edit-widget/disease-edit-widget.component';
import { DiseaseEditContainerComponent } from './components/containers/disease-edit-container/disease-edit-container.component';
import { DiseaseDetailsWidgetComponent } from './components/widgets/disease-details-widget/disease-details-widget.component';
import { DiseaseDetailsContainerComponent } from './components/containers/disease-details-container/disease-details-container.component';
import { DiseaseFormEffects } from './store/effects/disease-form/disease-form.effects';
import { DiseaseEditEffects } from './store/effects/disease-edit/disease-edit.effects';
import { diseaseFormReducer } from './store/reducers/disease-form/disease-form.reducer';
import { diseaseEditReducer } from './store/reducers/disease-edit/disease-edit.reducer';

@NgModule({
    declarations: [
        DiseaseListContainerComponent,
        DiseaseFormWidgetComponent,
        DiseaseFormContainerComponent,
        DiseaseEditWidgetComponent,
        DiseaseEditContainerComponent,
        DiseaseDetailsWidgetComponent,
        DiseaseDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalDiseaseRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('diseaseFormStateReducer', [
            diseaseFormReducer,
            diseaseEditReducer
        ]),
        EffectsModule.forFeature([
            DiseaseFormEffects,
            DiseaseEditEffects
        ]),
    ],
    exports: [
        DiseaseListContainerComponent,
        DiseaseFormWidgetComponent,
        DiseaseFormContainerComponent,
        DiseaseEditWidgetComponent,
        DiseaseEditContainerComponent,
        DiseaseDetailsWidgetComponent,
        DiseaseDetailsContainerComponent
    ]
})
export class PortalDiseaseModule { }
