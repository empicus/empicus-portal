import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AssignmentRoutingModule } from './assignment.routing.module';
import { CalculatorEffects } from './store/effects/calculator.effects';
import { academicOrderWizardReducer } from './store/reducers/academic-order-wizard/academic-order-wizard.reducer';
import { contentOrderWizardReducer } from './store/reducers/content-order-wizard/content-order-wizard.reducer';
import { AcademicOrderCalculatorService } from './services/calculators/academic-order-calculator.service';
import { ContentOrderCalculatorService } from './services/calculators/content-order-calculator.service';
import { PortalSharedModule } from '../portal-shared/portal-shared.module';
import { AcademicFormWizardContainerComponent } from './components/containers/wizards/academic-form-wizard-container/academic-form-wizard-container.component';
import { ContentFormWizardContainerComponent } from './components/containers/wizards/content-form-wizard-container/content-form-wizard-container.component';
import { InfoFormWidgetComponent } from './components/widgets/forms/academic/info-form-widget/info-form-widget.component';
import { DetailsFormWidgetComponent } from './components/widgets/forms/academic/details-form-widget/details-form-widget.component';
import { DataFormWidgetComponent } from './components/widgets/forms/academic/data-form-widget/data-form-widget.component';
import { AcademicInfoFormContainerComponent } from './components/containers/forms/academic/academic-info-form-container/academic-info-form-container.component';
import { AcademicDetailsFormContainerComponent } from './components/containers/forms/academic/academic-details-form-container/academic-details-form-container.component';
import { AcademicDataFormContainerComponent } from './components/containers/forms/academic/academic-data-form-container/academic-data-form-container.component';
import { ContentInfoFormContainerComponent } from './components/containers/forms/content/content-info-form-container/content-info-form-container.component';
import { ContentInfoFormWidgetComponent } from './components/widgets/forms/content/content-info-form-widget/content-info-form-widget.component';
import { ContentDetailsFormWidgetComponent } from './components/widgets/forms/content/content-details-form-widget/content-details-form-widget.component';
import { ContentDataFormWidgetComponent } from './components/widgets/forms/content/content-data-form-widget/content-data-form-widget.component';
import { ContentDetailsFormContainerComponent } from './components/containers/forms/content/content-details-form-container/content-details-form-container.component';
import { ContentDataFormContainerComponent } from './components/containers/forms/content/content-data-form-container/content-data-form-container.component';
import { ContentInvoiceFormContainerComponent } from './components/containers/forms/content/content-invoice-form-container/content-invoice-form-container.component';
import { ContentInvoiceFormWidgetComponent } from './components/widgets/forms/content/content-invoice-form-widget/content-invoice-form-widget.component';
import { InvoiceFormWidgetComponent } from './components/widgets/forms/academic/invoice-form-widget/invoice-form-widget.component';
import { AcademicInvoiceFormContainerComponent } from './components/containers/forms/academic/academic-invoice-form-container/academic-invoice-form-container.component';
import { ServiceOrderDetailsResolverService } from "./services/resolvers/service-order-details-resolver.service";
import { serviceOrderReducer } from './store/reducers/service-order/service-order.reducer';
import { ServiceOrderEffects } from './store/effects/service-order.effects';
import { ClientAccessInterceptorService } from '../../services/client-access-service/client-access.service';
import { AuthInterceptorService } from "../portal-auth/services/interceptors/auth-interceptor.service";
import { HttpErrorNotifierService } from 'helion-ui-notifications';
import { PortalAuthModule } from '../portal-auth/portal-auth.module';

@NgModule({
    declarations: [
        AcademicFormWizardContainerComponent,
        InfoFormWidgetComponent,
        DetailsFormWidgetComponent,
        DataFormWidgetComponent,
        AcademicInfoFormContainerComponent,
        AcademicDetailsFormContainerComponent,
        AcademicDataFormContainerComponent,
        ContentInfoFormContainerComponent,
        ContentInfoFormWidgetComponent,
        ContentDetailsFormWidgetComponent,
        ContentDataFormWidgetComponent,
        ContentDetailsFormContainerComponent,
        ContentDataFormContainerComponent,
        ContentFormWizardContainerComponent,
        ContentInvoiceFormContainerComponent,
        AcademicInvoiceFormContainerComponent,
        ContentInvoiceFormWidgetComponent,
        InvoiceFormWidgetComponent,
    ],
    imports: [
        CommonModule,
        AssignmentRoutingModule,
        PortalAuthModule,
        PortalSharedModule,
        /* Have to do this cause of the pescky interceptors */
        StoreModule.forFeature('orderFormStateReducer', [
            academicOrderWizardReducer,
            contentOrderWizardReducer,
            serviceOrderReducer
        ]),
        EffectsModule.forFeature([
            CalculatorEffects,
            ServiceOrderEffects
        ]),
    ],
    exports: [
        AcademicFormWizardContainerComponent,
        InfoFormWidgetComponent,
        DetailsFormWidgetComponent,
        DataFormWidgetComponent,
        AcademicInfoFormContainerComponent,
        AcademicDetailsFormContainerComponent,
        AcademicDataFormContainerComponent,
        ContentInfoFormContainerComponent,
        ContentInfoFormWidgetComponent,
        ContentDetailsFormWidgetComponent,
        ContentDataFormWidgetComponent,
        ContentDetailsFormContainerComponent,
        ContentDataFormContainerComponent,
        ContentFormWizardContainerComponent,
        ContentInvoiceFormContainerComponent,
        AcademicInvoiceFormContainerComponent,
        ContentInvoiceFormWidgetComponent,
        InvoiceFormWidgetComponent,
    ],
    providers: [
        AcademicOrderCalculatorService,
        ContentOrderCalculatorService,
        ServiceOrderDetailsResolverService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorNotifierService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ClientAccessInterceptorService, multi: true },
    ]
})
export class AssignmentModule { }
