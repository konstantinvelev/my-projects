import { IBase } from "./IBase";

export interface IHomework extends IBase {
    title: string;
    description: string;
    grade: string;
    dateTime: string;  
    isPassed: boolean;
    userId: string;
    courseId: string;
  }