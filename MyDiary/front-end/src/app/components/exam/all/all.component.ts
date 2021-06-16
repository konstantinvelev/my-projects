import { Component, OnInit } from '@angular/core';
import { IExam } from 'src/app/models/exam';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allExams: IExam[] | null = [];
  constructor(
    private examService: ExamService,
  ) { }

  ngOnInit(): void {
    this.examService.all().subscribe(exams => {
      this.allExams = Array.from(exams);
    });
  }

}
