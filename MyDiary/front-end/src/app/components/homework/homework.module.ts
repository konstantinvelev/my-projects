import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { HomeworkRoutingModule } from './homework-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    AllComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    HomeworkRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HomeworkModule,
  ],
  exports: [
    AllComponent,
    CreateComponent
  ]
})
export class HomeworkModule { }
