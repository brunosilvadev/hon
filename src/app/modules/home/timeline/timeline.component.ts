import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card';
import { Sample } from 'src/app/models/sample';
import { HonService } from 'src/app/services/hon.service';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit{
  constructor(private honService:HonService){}

  title = 'Homeowner Notebook';

  cards:Card[] = [];

  ngOnInit() {
    this.honService.ListCards().then(data => {
      this.cards = data;
    });
  }

}
