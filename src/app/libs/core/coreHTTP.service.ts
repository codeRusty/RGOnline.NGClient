import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request, Connection, ConnectionBackend } from '@angular/http';
import * as Rx from 'rxjs';
import { APIConfig } from '../../_configs/api.config';
import { API_Error } from '../app.constants'
import { LoaderService } from "../../Common/components/loader.service";


export enum Action { QueryStart, QueryStop };

@Injectable()
export class coreHTTP {
  process: EventEmitter<any> = new EventEmitter<any>();
  authFailed: EventEmitter<any> = new EventEmitter<any>();
  baseURL: string = '';
  constructor(private _http: Http, private loaderService: LoaderService) {
    this.baseURL = "http://www.vdconline.com/";

  }

  private _buildAuthHeader(): string {
    return localStorage.getItem("userToken");
  }

  public get(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Get, url, null, options);
  }

  public post(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Post, url, body, options);
  }

  public put(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Put, url, body, options);
  }

  public delete(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Delete, url, null, options);
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Patch, url, body, options);
  }

  public head(url: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    return this._request(RequestMethod.Head, url, null, options);
  }

  private _request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Rx.Observable<Response> {
    let requestOptions = new RequestOptions(Object.assign({
      method: method,
      url: this.baseURL + url,
      body: body
    }, options));

    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }
    this.showLoader('showLoader')

    requestOptions.headers.set("Token", this._buildAuthHeader())
    requestOptions.headers.set("Content-Type", 'application/json')
    return Rx.Observable.create((observer) => {
      this.process.next(Action.QueryStart);
      this._http.request(new Request(requestOptions))
        .map(res => res.json())
        .finally(() => {
          this.process.next(Action.QueryStop);
          this.hideLoader('hideLoader');
        })
        .subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          switch (err.status) {
            case 401:
              //intercept 401
              this.authFailed.next(err);
              observer.error(API_Error.Error401);
              break;
            case 404:
              //intercept 401
              this.authFailed.next(err);
              observer.error(API_Error.Error404);
              break;
            default:
              observer.error(err);
              break;
          }
        })

    })
  }

  hideLoader(text: string) {
    console.log(text);
    this.loaderService.hide();
  }
  showLoader(text: string) {
    console.log(text);
    this.loaderService.show();
  }

}
