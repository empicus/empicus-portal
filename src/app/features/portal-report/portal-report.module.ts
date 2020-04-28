import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalReportRoutingModule } from './portal-report.routing.module';
import { ReportListContainerComponent } from './components/containers/report-list-container/report-list-container.component';
import { ReportFormWidgetComponent } from './components/widgets/report-form-widget/report-form-widget.component';
import { ReportFormContainerComponent } from './components/containers/report-form-container/report-form-container.component';
import { ReportEditWidgetComponent } from './components/widgets/report-edit-widget/report-edit-widget.component';
import { ReportEditContainerComponent } from './components/containers/report-edit-container/report-edit-container.component';
import { ReportDetailsWidgetComponent } from './components/widgets/report-details-widget/report-details-widget.component';
import { ReportDetailsContainerComponent } from './components/containers/report-details-container/report-details-container.component';
import { ReportFormEffects } from './store/effects/report-form/report-form.effects';
import { ReportEditEffects } from './store/effects/report-edit/report-edit.effects';
import { reportFormReducer } from './store/reducers/report-form/report-form.reducer';
import { reportEditReducer } from './store/reducers/report-edit/report-edit.reducer';

@NgModule({
    declarations: [
        ReportListContainerComponent,
        ReportFormWidgetComponent,
        ReportFormContainerComponent,
        ReportEditWidgetComponent,
        ReportEditContainerComponent,
        ReportDetailsWidgetComponent,
        ReportDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalReportRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('reportFormStateReducer', [
            reportFormReducer,
            reportEditReducer
        ]),
        EffectsModule.forFeature([
            ReportFormEffects,
            ReportEditEffects
        ]),
    ],
    exports: [
        ReportListContainerComponent,
        ReportFormWidgetComponent,
        ReportFormContainerComponent,
        ReportEditWidgetComponent,
        ReportEditContainerComponent,
        ReportDetailsWidgetComponent,
        ReportDetailsContainerComponent
    ]
})
export class PortalReportModule { }
