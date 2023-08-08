import { Component, OnInit } from '@angular/core';
import { HonService } from './services/hon.service';
import { Sample } from './models/sample';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  constructor(private honService:HonService){}

  title = 'hon';
  samples:Sample[] = [];

  ngOnInit() {
    this.honService.getSamples().then(data => {
      this.samples = data;
    });
  }
}
