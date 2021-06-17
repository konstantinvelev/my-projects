import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute: ActivatedRoute,
  ) { 
    const id = activatedRoute.snapshot.params.id;
    this.examService.getById(id).subscribe(exam => {
      this.exam = exam;
    });
  }

  ngOnInit(): void {
  }

}
