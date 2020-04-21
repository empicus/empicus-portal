import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ArtifactData, AbstractData } from 'helion-core';
import { DataService, RequestData, ResponseData } from 'helion-core-http';

@Injectable()
export class AcademicOrderListResolverService implements Resolve<Observable<ArtifactData[]>> {
    

    constructor(private dataService: DataService) { }

    /**
     * 
     * @param route 
     * @param state 
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArtifactData[]> {
        if(route.data['statusCode']) {
            let requestData: RequestData<AbstractData> = new RequestData<AbstractData>();
            requestData.data = { };
            requestData.code = route.data['statusCode'];
            requestData.serviceName = 'academicOrderList';
            return this.dataService.getArtifacts(requestData);
        }
    }
}

