import { Component, OnInit } from '@angular/core';
import { HonService } from './services/hon.service';
import { Sample } from './models/sample';
import { FormGroup, FormControl } from '@angular/forms';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  constructor(private honService:HonService){}

  myForm = new FormGroup({
    cardName: new FormControl(''),
    cardContent: new FormControl(''),
  });

  title = 'Homeowner Notebook';
  samples:Sample[] = [];
  cards:Card[] = [];

  ngOnInit() {
    this.honService.getSamples().then(data => {
      this.samples = data;
    });
    this.honService.ListCards().then(data => {
      this.cards = data;
    })
  }

  onSubmit() {
    const formValue = this.myForm.value;

    const card:Card = {
      cardId: this.cards[this.cards.length - 1].cardId + 1,
      cardName: formValue.cardName || '',
      cardContent: formValue.cardContent || '',
      categoryid: 0
    };
    
    this.honService.addCard(card).then(
      () => {
        this.myForm.reset();
        this.ngOnInit();
      }
    )
  }
}
