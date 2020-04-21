import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtifactData, AbstractData } from 'helion-core';
import { DataService, RequestData } from 'helion-core-http';

@Injectable()
export class ServiceOrderDetailsResolverService implements Resolve<Observable<ArtifactData>> {
    

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
            requestData.serviceName = 'clientOrderData';
            return this.dataService.getArtifact(requestData);
        }
    }
}

