import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sample } from '../models/sample';
import { lastValueFrom } from 'rxjs';
import { Card } from '../models/card';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class HonService {

  private baseUri:string = "http://localhost:5154/";

  constructor(private client:HttpClient) { }

  cards:Card[] = [];

  async getSamples()
  {
    return await lastValueFrom(this.client.get<Sample[]>(this.baseUri + 'list'));
  }

  async addSample(sample:Sample)
  {
    return await lastValueFrom(this.client.post(this.baseUri + 'create',sample));
  }

  async addCard(card:Card)
  {
    return await lastValueFrom(this.client.post(this.baseUri + 'add-card',card));
  }

  async ListCards()
  {
    return await lastValueFrom(this.client.get<Card[]>(this.baseUri + 'cards'));
  }

  async ListCategories()
  {
    return await lastValueFrom(this.client.get<Category[]>(this.baseUri + 'categories'));
  }

}
