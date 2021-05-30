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

  // currentUser: User | null;
  // userById: IUser | null;
  private currentUser = {};
  //get isLogged(): boolean { return !!this.currentUser; }


  constructor(
    private http: HttpClient,
    private config: AppConfig,
    helper: Helpers
  ) { super(helper); }

  getUsers(): Observable<any> {
    return this.http.get(this.pathAPI + 'user', super.header()).pipe(
      catchError(super.handleError));
  }

  // getCurrentUserProfile(): Observable<any> {
  //   return this.http.get(`${pathAPI}/users/profile`, { withCredentials: true }).pipe(
  //     tap(((user: User) => this.currentUser = user)),
  //     catchError(() => { this.currentUser = null; return of(null); })
  //   );
  // }

  // login(data: any): Observable<any> {
  //   return this.http.post(`${pathAPI}/users/login`, data, { withCredentials: true }).pipe(
  //     tap((user: User) => this.currentUser = user)
  //   );
  // }

  register(data: any): Observable<any> {
    return this.http.post(this.pathAPI + 'user',JSON.stringify(data), super.header()).pipe(
      catchError(super.handleError));
  }
  // register(data: any): Observable<any> {
  //   return this.http.post(this.pathAPI + 'user', data, { withCredentials: false });
  // }

  // logout(): Observable<any> {
  //   return this.http.post(`${pathAPI}/users/logout`, {}, { withCredentials: true }).pipe(
  //     tap(() => this.currentUser = null)
  //   );
  // }

  // editProfile(data): Observable<User>{
  //   return this.http.put(`${pathAPI}/users/profile`, data.formData, { withCredentials: true }).pipe(
  //     tap((user: User) => this.currentUser = user)
  //   )
  // }
}

