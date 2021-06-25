import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/helpers/helpers';
import { IExam } from 'src/app/models/exam';
import { CourseService } from 'src/app/services/course.service';
import { ExamService } from 'src/app/services/exam.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private router: Router,
    private examService: ExamService,
    private tokenService: TokenService,
    private courseService: CourseService,
    private helper: Helpers,
  ) { }

  ngOnInit(): void {
  }

  createExam(data: any): void {
    var user = this.helper.getUser();
    data.userId = user.id;
     this.courseService.getCourseByName(data.courseName).subscribe(course => {
      data.courseId =course.id;
      this.examService.createExam(data).subscribe({
        next: () => {
          this.router.navigate(['/exam/all']);
        },
        error: (err) => {
          //this.errorMessege = err.message;
          this.router.navigate(['/exam/create']);
        }
      })
    })
   
  }
}
