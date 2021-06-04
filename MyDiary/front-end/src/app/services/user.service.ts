import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { AppConfig } from '../config/config';
import { Helpers } from '../helpers/helpers';
@Injectable()
export class UserService extends BaseService {
  private pathAPI = this.config.setting['PathAPI'];

  currentUser: User | null;
  // userById: IUser | null;
  //private currentUser = {};
  //get isLogged(): boolean { return !!this.currentUser; }


  constructor(
    private http: HttpClient,
    private config: AppConfig,
    helper: Helpers,
  ) {
     super(helper);
     this.currentUser = new User();
   }

  getUsers(): Observable<any> {
    return this.http.get(this.pathAPI + 'user', super.header()).pipe(
      catchError(super.handleError));
  }

}

