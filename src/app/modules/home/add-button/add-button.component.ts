import { Component, ViewChild } from '@angular/core';
import { InsertComponent } from '../insert/insert.component';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {
  popup:boolean = false
  @ViewChild(InsertComponent) insertComponent!: InsertComponent;
  @ViewChild(TimelineComponent) timelineComponent!: TimelineComponent;
  async submitForm(){
    await this.insertComponent.onSubmit().then(
      () => this.timelineComponent.refreshCardList() 
    );
  }
}
