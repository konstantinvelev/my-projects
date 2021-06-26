import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/models/course';
import { IExam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  exam: IExam<ICourse> | null = null;

  constructor(
    private examService: ExamService,
    private router: Router,
    activatedRoute: ActivatedRoute,
  ) { 
    const id = activatedRoute.snapshot.params.id;
    this.examService.getById(id).subscribe(exam => {
      this.exam = exam;
    });
  }

  ngOnInit(): void {
  }

  deleteExam(id: string): void{
    if (confirm('Are you sure you want delete this Exam?')) {
      this.examService.deleteById(id).subscribe({
        next: () => {
          this.router.navigate(['/exam/all']);
        },
        error: (err) => {
          console.log(err.message);
        }
      })
    }
  }

}
