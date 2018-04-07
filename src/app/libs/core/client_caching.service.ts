import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request, Connection, ConnectionBackend } from '@angular/http';
import * as Rx from 'rxjs';
import { APIConfig } from '../../_configs/api.config';
import { API_Error } from '../app.constants'


export enum Action { QueryStart, QueryStop };

@Injectable()
export class ClientCaching {

  constructor(private _http: Http) {


  }



}