import { IBase } from "./IBase";

export interface IExam extends IBase {
  title: string;
  grade: string;
  dateTime: string;
  courseName: string;
  isPassed: boolean;
  userId: string;
  courseId: string;
}