import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sample } from '../models/sample';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HonService {

  private baseUri:string = "http://localhost:5154/";

  constructor(private client:HttpClient) { }

  async getSamples()
  {
    return await lastValueFrom(this.client.get<Sample[]>(this.baseUri + 'list'));
  }
}
