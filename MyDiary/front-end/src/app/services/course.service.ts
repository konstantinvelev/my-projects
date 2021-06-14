import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs/Rx';
import { AppConfig } from "../config/config";
import { Helpers } from "../helpers/helpers";
import { ICourse } from "../models/course";
import { BaseService } from "./base.service";

@Injectable()
export class CourseService extends BaseService {
    private pathAPI = this.config.setting['PathAPI'];


    constructor(
        private http: HttpClient,
        private config: AppConfig,
        helper: Helpers,
    ) {
        super(helper);
    }

    createCourse(data:any) : Observable<any>{
        return this.http.post<any>(this.pathAPI + 'course', data, super.header()).pipe(
            catchError(super.handleError));
    }

    
}