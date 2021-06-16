import { Component, OnInit,Input } from '@angular/core';
import { IHomework } from 'src/app/models/homework';
import { HomeworkService } from 'src/app/services/homeworkService';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  allHomeworks: IHomework[] | null = [];

  constructor(
    private homeworkService:HomeworkService
  ) { }

  ngOnInit(): void {
    this.homeworkService.all().subscribe(homeworks => {
      this.allHomeworks = Array.from(homeworks);
    });
  }

  

}
