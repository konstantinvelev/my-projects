import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { AppConfig } from '../config/config';
import { Helpers } from '../helpers/helpers';
import {IUser} from '../models/user'
@Injectable()
export class UserService extends BaseService {
  private pathAPI = this.config.setting['PathAPI'];

  //currentUser: IUser | null;
  // userById: IUser | null;
  //get isLogged(): boolean { return !!this.currentUser; }

  constructor(
    private http: HttpClient,
    private config: AppConfig,
    helper: Helpers,
  ) {super(helper);}

  getUsers(): Observable<any> {
    return this.http.get(this.pathAPI + 'user', super.header()).pipe(
      catchError(super.handleError));
  }

  

}

