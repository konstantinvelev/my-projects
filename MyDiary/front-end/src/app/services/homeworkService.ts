import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppConfig } from "../config/config";
import { Helpers } from "../helpers/helpers";
import { IHomework } from "../models/homework";
import { BaseService } from "./base.service";

@Injectable()
export class HomeworkService extends BaseService {
    private pathAPI = this.config.setting['PathAPI'] + 'homework';

    constructor(
        private http: HttpClient,
        private config: AppConfig,
        helper: Helpers,
    ) {
        super(helper);
    }

    all(): Observable<any> {
        return this.http.get<any>(this.pathAPI, super.header()).pipe(
            catchError(super.handleError)
        );
    }

    getById(id: string): Observable<IHomework> {
        return this.http.get<any>(this.pathAPI + `/${id}`, super.header()).pipe(
            catchError(super.handleError)
        );
    }

    createExam(data: any): Observable<IHomework> {
        return this.http.post<any>(this.pathAPI, data, super.header()).pipe(
            catchError(super.handleError)
        );
    }
    
    deleteById(data: any) {
        return this.http.get<any>(this.pathAPI + `/${data.homeworkId}/${data.courseId}`, super.header()).pipe(
            catchError(super.handleError)
        );
    }
}