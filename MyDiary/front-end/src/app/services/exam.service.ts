import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from "../config/config";
import { Helpers } from "../helpers/helpers";
import { IExam } from "../models/exam";
import { BaseService } from "./base.service";

@Injectable()
export class ExamService extends BaseService {

    private pathAPI = this.config.setting['PathAPI'] + 'exam';

    constructor(
        private http: HttpClient,
        private config: AppConfig,
        helper: Helpers,
    ) {
        super(helper);
    }

    all(): Observable<IExam[]> {
        return this.http.get<any>(this.pathAPI, super.header()).pipe(
            catchError(super.handleError)
        );
    }

    createExam(data: any): Observable<any> {
        return this.http.post<any>(this.pathAPI, data, super.header()).pipe(
            catchError(super.handleError)
        );
    }

}