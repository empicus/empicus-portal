import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ArtifactData, AbstractData } from 'helion-core';
import { DataService, RequestData, ResponseData } from 'helion-core-http';

export class SignupResolverService implements Resolve<Observable<ArtifactData>> {
    

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
            requestData.serviceName = 'signupData';
            return this.dataService.getArtifact(requestData);
        }
    }
}

