import { IExam } from "./exam";
import { IHomework } from "./homework";
import { IBase } from "./IBase";

export interface ICourse extends IBase {
    name: string;
    description: string;
    grade: string;
    dateTime: string;
    isPassed: boolean;
    userId: string;
    homeworks: IHomework[];
    exams: IExam[]
  }