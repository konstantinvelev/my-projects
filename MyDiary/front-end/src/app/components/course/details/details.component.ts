import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  course: ICourse | null = null;

  constructor(
    private courseService: CourseService,
    private router:Router,
    activatedRoute: ActivatedRoute,
  ) {  
    const id = activatedRoute.snapshot.params.id;
    this.courseService.getCourseById(id).subscribe(course => {
      this.course = course;
    });
  }

  ngOnInit(): void {
  }

  deleteCourse(id:string): void{
    if (confirm('Are you sure you want delete this Course?')) {
      this.courseService.deleteById(id).subscribe({
        next: () => {
          this.router.navigate(['/course/all']);
        },
        error: (err) => {
          console.log(err.message);
        }
      })
    }
  }

}
