import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalDiseaseContactRoutingModule } from './portal-disease-contact.routing.module';
import { DiseaseContactListContainerComponent } from './components/containers/disease-contact-list-container/disease-contact-list-container.component';
import { DiseaseContactFormWidgetComponent } from './components/widgets/disease-contact-form-widget/disease-contact-form-widget.component';
import { DiseaseContactFormContainerComponent } from './components/containers/disease-contact-form-container/disease-contact-form-container.component';
import { DiseaseContactEditWidgetComponent } from './components/widgets/disease-contact-edit-widget/disease-contact-edit-widget.component';
import { DiseaseContactEditContainerComponent } from './components/containers/disease-contact-edit-container/disease-contact-edit-container.component';
import { DiseaseContactDetailsWidgetComponent } from './components/widgets/disease-contact-details-widget/disease-contact-details-widget.component';
import { DiseaseContactDetailsContainerComponent } from './components/containers/disease-contact-details-container/disease-contact-details-container.component';
import { DiseaseContactFormEffects } from './store/effects/disease-contact-form/disease-contact-form.effects';
import { DiseaseContactEditEffects } from './store/effects/disease-contact-edit/disease-contact-edit.effects';
import { diseaseContactFormReducer } from './store/reducers/disease-contact-form/disease-contact-form.reducer';
import { diseaseContactEditReducer } from './store/reducers/disease-contact-edit/disease-contact-edit.reducer';

@NgModule({
    declarations: [
        DiseaseContactListContainerComponent,
        DiseaseContactFormWidgetComponent,
        DiseaseContactFormContainerComponent,
        DiseaseContactEditWidgetComponent,
        DiseaseContactEditContainerComponent,
        DiseaseContactDetailsWidgetComponent,
        DiseaseContactDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalDiseaseContactRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('disease-contactFormStateReducer', [
            diseaseContactFormReducer,
            diseaseContactEditReducer
        ]),
        EffectsModule.forFeature([
            DiseaseContactFormEffects,
            DiseaseContactEditEffects
        ]),
    ],
    exports: [
        DiseaseContactListContainerComponent,
        DiseaseContactFormWidgetComponent,
        DiseaseContactFormContainerComponent,
        DiseaseContactEditWidgetComponent,
        DiseaseContactEditContainerComponent,
        DiseaseContactDetailsWidgetComponent,
        DiseaseContactDetailsContainerComponent
    ]
})
export class PortalDiseaseContactModule { }
