import { ICourse } from "./course";
import { IExam } from "./exam";
import { IHomework } from "./homework";
import { IBase } from "./IBase";

export interface IUser<T = string> extends IBase {
  username: string ;
  email: string ;
  userInfo: string ;
  courses: ICourse[] ;
  homeworks: IHomework[] ;
  exam: IExam[] ;
}