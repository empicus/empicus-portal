import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogInjectionPointDirective, UiNotificationModuleState, initUiDialogConfigAction, UiDialogService } from 'helion-ui-notifications';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    @ViewChild(DialogInjectionPointDirective, { static: true })
    dialogHost: DialogInjectionPointDirective;

    constructor(private uiDialogService: UiDialogService, private uiNotificationStore: Store<UiNotificationModuleState>) {
    }
    
    ngAfterViewInit(): void {
        let that = this;
        this.uiDialogService.setViewContainerRef(that.dialogHost.viewContainerRef);
    }


}
