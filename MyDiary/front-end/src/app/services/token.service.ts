import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import { of } from 'rxjs/observable';
import { catchError, map, tap } from 'rxjs/operators';
import { AppConfig } from '../config/config';
import { BaseService } from './base.service';
// import { Token } from '../models/token';
import { Helpers } from '../helpers/helpers';
import { IUser } from '../models/user';
@Injectable()
export class TokenService extends BaseService {

    private pathAPI = this.config.setting['PathAPI'] + 'user';
    public errorMessage = '';

    constructor(
        private http: HttpClient,
        private config: AppConfig,
        private Helper: Helpers,
        helper: Helpers,
    ) {
        super(helper);
    }
    auth(data: any): any {
        let body = JSON.stringify(data);
        return this.getToken(body);
    }
    login(data: any): any {
        let body = JSON.stringify(data);
        return this.getCreatedToken(body);
    }
    logout(): any {
        this.Helper.logout();
    }

    private getToken(body: any): Observable<any> {
        return this.http.post<any>(this.pathAPI, body, super.header()).pipe(
            catchError(super.handleError)
        );
    }
    private getCreatedToken(body: any): Observable<any> {
        return this.http.post<any>(this.pathAPI, body, super.header()).pipe(
            tap((params) => this.Helper.setUserInfo(params.user)),
            catchError(super.handleError)
        );
    }
}