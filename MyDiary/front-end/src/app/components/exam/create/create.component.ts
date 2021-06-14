import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  createExam(data: any): void {
    data.userId = this.tokenService.currentUser?.id;
    this.examService.createExam(data).subscribe({
      next: () => {
        this.router.navigate(['/course/all']);
      },
      error: (err) => {
        //this.errorMessege = err.message;
        this.router.navigate(['/course/create']);
      }
    })
  }
}
