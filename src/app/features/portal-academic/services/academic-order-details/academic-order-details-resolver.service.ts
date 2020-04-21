import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ArtifactData, AbstractData } from 'helion-core';
import { DataService, RequestData, ResponseData } from 'helion-core-http';
import { UiModuleState, navigateToAction } from 'helion-ui';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
export class AcademicOrderDetailsResolverService implements Resolve<Observable<ArtifactData>> {
    

    constructor(private uiStore: Store<UiModuleState>, 
        private dataService: DataService) { }

    /**
     * 
     * @param route 
     * @param state 
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let code = route.params.code;
        if(code) {
            let requestData: RequestData<AbstractData> = new RequestData<AbstractData>();
            requestData.data = { };
            requestData.code = code;
            requestData.serviceName = 'academicOrderData';
            return this.dataService.getArtifact(requestData).pipe(catchError(err => {
                this.uiStore.dispatch(navigateToAction({
                    data: {
                        route: '/home',
                        routeData: []
                    }
                }));
                return EMPTY;
              }));
        }
    }
}

