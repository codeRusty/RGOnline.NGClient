import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { BaseRequestOptions, RequestOptions } from '@angular/http';
import {ApiGateway} from './ApiGateway'

@Injectable()
export class AccountService extends BaseRequestOptions
{
 private token: string;
 hostUrl: string;
 serviceUrl: string;
constructor(private apiGateway:ApiGateway,private http:Http)
{
super();
}

 getLoggedInUserData(authorizationData:any): Observable<any> {
        this.serviceUrl = 'http://www.clouddesktopapiservice.com/api/getuserdata';
        return this.apiGateway.getLoggedInUserData(this.serviceUrl, authorizationData).map((response: any) => {
            return response;
        })
            .catch((error: any) => Observable.throw(error));

    }
}
