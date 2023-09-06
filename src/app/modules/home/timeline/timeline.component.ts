import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
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

  async refreshCardList()
  {
    this.honService.ListCards().then(data => {
      this.honService.cards = data;
      this.cards = this.honService.cards;
      console.log(this.cards.length);
    })
    .catch();
  }
  ngOnInit() {
    this.refreshCardList();
  }

}
