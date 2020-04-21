import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { ObjectUtils } from 'helion-core';
import { UiNotificationService, UI_NOTIFICATION_TY_INDICATION, UI_NOTIFICATION_LOADING_TEXT, UI_NOTIFICATION_TY_ERROR, UI_NOTIFICATION_ERROR_TITLE } from 'helion-ui-notifications';

@Injectable()
export class HttpErrorNotifierService implements HttpInterceptor {

    constructor(private notifactionService: UiNotificationService) { }
    
    /**
     * 
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqBody: any = (ObjectUtils.isValid(request.body)) ? request.body : {};
        let data = (ObjectUtils.isValid(reqBody.data)) ? reqBody.data : {};

        console.log('$$$$$$$$$$$$$$$$$$HttpErrorNotifierService....', data);

        if(!ObjectUtils.isValid(data.silent)) {
            this.notifactionService.openUiNotification({ 
                type: UI_NOTIFICATION_TY_INDICATION,  title: UI_NOTIFICATION_LOADING_TEXT
            })
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) 
                    this.notifactionService.closeAllUiNotifications();
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.notifactionService.openUiNotification({
                    type: UI_NOTIFICATION_TY_ERROR,
                    title: UI_NOTIFICATION_ERROR_TITLE,
                    message: error.message
                });
                return throwError(error);
            })
        );
    }
}
