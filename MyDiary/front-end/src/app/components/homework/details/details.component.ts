import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHomework } from 'src/app/models/homework';
import { HomeworkService } from 'src/app/services/homeworkService';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  homework: IHomework | null = null;
  constructor(
    private homeworkService: HomeworkService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    const id = activatedRoute.snapshot.params.id;
    this.homeworkService.getById(id).subscribe(homework => {
      this.homework = homework;
    });
  }

  ngOnInit(): void {
  }

  deleteHomework(data:any):void{
    if (confirm('Are you sure you want delete this Homework?')) {
      this.homeworkService.deleteById(data).subscribe({
        next: () => {
          this.router.navigate(['/homework/all']);
        },
        error: (err) => {
          console.log(err.message);
        }
      })
    }
  }
}
