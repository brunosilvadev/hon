import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';
import { AddButtonComponent } from './add-button/add-button.component';



@NgModule({
  declarations: [
    TimelineComponent,
    InsertComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddButtonComponent
  ]
})
export class HomeModule { }
