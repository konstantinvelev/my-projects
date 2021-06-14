import { IBase } from "./IBase";

export interface IExam extends IBase {
    name: string;
    grade: string;
    dateTime: string;
    isPassed: boolean;
    userId: string;
    courseId: string;
  }