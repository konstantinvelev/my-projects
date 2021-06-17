import { IExam } from "./exam";
import { IHomework } from "./homework";
import { IBase } from "./IBase";
import { IUser } from "./user";

export interface ICourse<T = string> extends IBase {
    name: string;
    description: string;
    grade: string;
    dateTime: string;
    isPassed: boolean;
    userId: IUser;
    homeworks: IHomework[];
    exams: IExam[]
  }