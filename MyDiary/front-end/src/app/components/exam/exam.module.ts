import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';
import { ExamRoutingModule } from './exam-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    DetailsComponent,
    AllComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
providers:[
  ExamModule
],
exports:[
  AllComponent,
  CreateComponent,
  DetailsComponent,
]
})
export class ExamModule { }
