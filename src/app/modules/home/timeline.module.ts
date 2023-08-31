import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';



@NgModule({
  declarations: [
    TimelineComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    TimelineComponent
  ]
})
export class HomeModule { }
