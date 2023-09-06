import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card';
import { Category } from 'src/app/models/category';
import { HonService } from 'src/app/services/hon.service';

@Component({
  selector: 'insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit{
  constructor(private honService:HonService){}

  categories:Category[] = [];

  myForm = new FormGroup({
    cardName: new FormControl(''),
    cardContent: new FormControl(''),
    cardCategory: new FormControl(''),
  });

ngOnInit(): void {
  this.honService.ListCategories().then(data => {
    this.categories = data;
  });
}

  async onSubmit() {
    const formValue = this.myForm.value;

    const card:Card = {
      cardId: this.honService.cards[this.honService.cards.length - 1].cardId + 1,
      cardName: formValue.cardName || '',
      cardContent: formValue.cardContent || '',
      categoryid: 0
    };
    
    this.honService.addCard(card).then(
      () => {
        this.myForm.reset();
      }
    )
  }
}
