import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseRoutingModule } from './course-routing.module';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AllComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseRoutingModule,
  ],
  providers:[
    CourseModule
  ],
  exports:[
    AllComponent,
    CreateComponent,
    DetailsComponent,
  ]
})
export class CourseModule { }
