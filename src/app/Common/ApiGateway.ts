import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, URLSearchParams, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import 'rxjs/Rx';


export class ApiGatewayOptions {
    method: RequestMethod;
    url: string;
    headers = {};
    params = {};
    data = {};
}


@Injectable()
export class ApiGateway {

    constructor(private http: Http) {

    }

    login(url: string, data: any): Observable<Response> {
        let body = `grant_type=password&username=${data.Email}&password=${data.Password}`;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .catch((error: any) => {
                return Observable.throw(error);
            })
            .map(this.unwrapHttpValue)
            .catch((error: any) => {
                let message = JSON.parse(error._body);
                let msg = { "ErrorMessage": message.error_description };
                return Observable.throw(msg);
            })
            .finally(() => {

            });
    }
    
    private unwrapHttpError(error: any): any {
        try {
            if (error.status == 401) {
                //this.router.navigate(['/login']);
                return ({ "ErrorMessage": ["Unauthorised"] });
            }
            else if (error.status == 302) {
                // this.router.navigate([error._body]);
            }
            else if (error.status == 400) {
                let message = JSON.parse(error._body);
                return { "ErrorMessage": message.ErrorMessage };
            }
            else if (error.status == 500) {
                let message = JSON.parse(error._body);
                return { "ErrorMessage": message.ErrorMessage };
            }
            else {
                return ({ "ErrorMessage": ["Something went wrong"] });
            }
        } catch (jsonError) {
            return ({ "ErrorMessage": ["Something went wrong"] });
        }
    }

    private unwrapHttpValue(value: Response): any {
        return (value.json());
    }

    getLoggedInUserData(url: string, data: any): Observable<Response> {

        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': `bearer ${data.Token}` });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .catch((error: any) => {
                return Observable.throw(error);
            })
            .map(this.unwrapHttpValue)
            .catch((error: any) => {
                return Observable.throw(this.unwrapHttpError(error));
            })
            .finally(() => {

            });
    }
}
