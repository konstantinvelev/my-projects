import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/helpers/helpers';
import { CourseService } from 'src/app/services/course.service';
import { HomeworkService } from 'src/app/services/homeworkService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private helper: Helpers,
    private courseService: CourseService,
    private homeworkService: HomeworkService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createHomework(data: any): void {
    var user = this.helper.getUser();
    data.userId = user.Id;
     this.courseService.getCourseByName(data.courseName).subscribe(course => {
      data.courseId =course.id;
      this.homeworkService.createExam(data).subscribe({
        next: () => {
          this.router.navigate(['/homework/all']);
        },
        error: (err) => {
          //this.errorMessege = err.message;
          this.router.navigate(['/homework/create']);
        }
      })
    })
   
  }
}
