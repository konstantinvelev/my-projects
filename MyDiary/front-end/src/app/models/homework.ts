import { ICourse } from "./course";
import { IBase } from "./IBase";
import { IUser } from "./user";

export interface IHomework<T = string> extends IBase {
    title: string;
    description: string;
    grade: string;
    dateTime: string;  
    isPassed: boolean;
    userId: string;
    user: IUser;
    courseId: string;
    course: ICourse;
  }