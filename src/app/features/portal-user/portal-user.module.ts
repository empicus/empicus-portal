import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HelionUiComponentsModule } from 'helion-ui-components';
import { HelionUiNotificationsModule } from 'helion-ui-notifications';
import { HelionCoreHttpModule } from 'helion-core-http';
import { PortalModule } from '../portal/portal.module';
import { PortalUserRoutingModule } from './portal-user.routing.module';
import { UserListContainerComponent } from './components/containers/user-list-container/user-list-container.component';
import { UserFormWidgetComponent } from './components/widgets/user-form-widget/user-form-widget.component';
import { UserFormContainerComponent } from './components/containers/user-form-container/user-form-container.component';
import { UserEditWidgetComponent } from './components/widgets/user-edit-widget/user-edit-widget.component';
import { UserEditContainerComponent } from './components/containers/user-edit-container/user-edit-container.component';
import { UserDetailsWidgetComponent } from './components/widgets/user-details-widget/user-details-widget.component';
import { UserDetailsContainerComponent } from './components/containers/user-details-container/user-details-container.component';
import { UserFormEffects } from './store/effects/user-form/user-form.effects';
import { UserEditEffects } from './store/effects/user-edit/user-edit.effects';
import { userFormReducer } from './store/reducers/user-form/user-form.reducer';
import { userEditReducer } from './store/reducers/user-edit/user-edit.reducer';

@NgModule({
    declarations: [
        UserListContainerComponent,
        UserFormWidgetComponent,
        UserFormContainerComponent,
        UserEditWidgetComponent,
        UserEditContainerComponent,
        UserDetailsWidgetComponent,
        UserDetailsContainerComponent
    ],
    imports: [
        CommonModule,
        PortalUserRoutingModule,
        HttpClientModule,
        HelionUiComponentsModule,
        HelionUiNotificationsModule,
        HelionCoreHttpModule,
        PortalModule,
        StoreModule.forFeature('userFormStateReducer', [
            userFormReducer,
            userEditReducer
        ]),
        EffectsModule.forFeature([
            UserFormEffects,
            UserEditEffects
        ]),
    ],
    exports: [
        UserListContainerComponent,
        UserFormWidgetComponent,
        UserFormContainerComponent,
        UserEditWidgetComponent,
        UserEditContainerComponent,
        UserDetailsWidgetComponent,
        UserDetailsContainerComponent
    ]
})
export class PortalUserModule { }
