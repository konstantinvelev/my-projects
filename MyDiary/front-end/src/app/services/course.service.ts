import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from "../config/config";
import { Helpers } from "../helpers/helpers";
import { ICourse } from "../models/course";
import { BaseService } from "./base.service";

@Injectable()
export class CourseService extends BaseService {
    private pathAPI = this.config.setting['PathAPI'] + 'course';

    constructor(
        private http: HttpClient,
        private config: AppConfig,
        helper: Helpers,
    ) {
        super(helper);
    }

    all(): Observable<ICourse[]> {
        return this.http.get<any>(this.pathAPI, super.header()).pipe(
            catchError(super.handleError)
        );
    }

    createCourse(data: any): Observable<any> {
        return this.http.post<any>(this.pathAPI, data, super.header()).pipe(
            catchError(super.handleError)
        );
    }

    getCourseById(id:string): Observable<ICourse> {
        return this.http.get<ICourse>(this.pathAPI + `/${id}`, super.header()).pipe(
            catchError(super.handleError)
        );
      }

    getCourseByName(name: string): Observable<any> {
        var headers = new HttpHeaders();
        headers = super.header().headers;
        const params = new HttpParams().append('courseName', name);
        var course = null
        return this.http.get<any>((this.pathAPI + `/GetByName/${name}`), { headers: headers, params }).pipe(
            catchError(super.handleError)
        );
    }
    deleteById(id: string) {
        return this.http.delete<any>(this.pathAPI + `/${id}`, super.header()).pipe(
            catchError(super.handleError)
        );
      }
  
}