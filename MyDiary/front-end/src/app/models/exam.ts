import { ICourse } from "./course";
import { IBase } from "./IBase";
import { IUser } from "./user";

export interface IExam<T = string> extends IBase {
  title: string;
  grade: string;
  dateTime: string;
  courseName: string;
  isPassed: boolean;
  userId: IUser;
  courseId: string;
  course: ICourse;
}