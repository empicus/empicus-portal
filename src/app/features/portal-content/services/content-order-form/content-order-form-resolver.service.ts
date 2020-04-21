import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ArtifactData, AbstractData } from 'helion-core';
import { DataService, RequestData, ResponseData } from 'helion-core-http';

@Injectable({
    providedIn: 'root'
})
export class ContentOrderFormResolverService implements Resolve<Observable<ArtifactData>> {
    

    constructor(private dataService: DataService) { }

    /**
     * 
     * @param route 
     * @param state 
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArtifactData> {
        let code = route.params.code;
        if(code) {
            let requestData: RequestData<AbstractData> = new RequestData<AbstractData>();
            requestData.data = { };
            requestData.code = code;
            requestData.serviceName = 'contentOrderData';
            return this.dataService.getArtifact(requestData);
        }
    }
}

