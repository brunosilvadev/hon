import { Component, OnInit } from '@angular/core';
import { HonService } from './services/hon.service';
import { Sample } from './models/sample';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  constructor(private honService:HonService){}

  myForm = new FormGroup({
    sampleName: new FormControl(''),
    sampleId: new FormControl(''),
  });

  title = 'hon';
  samples:Sample[] = [];

  ngOnInit() {
    this.honService.getSamples().then(data => {
      this.samples = data;
    });
  }

  onSubmit() {
    // Logic to handle form submission
    console.log(this.myForm.value);
    const formValue = this.myForm.value;
    const sample:Sample = {
      sampleId: formValue.sampleId !== null && formValue.sampleId !== undefined
          ? +formValue.sampleId
          : 0,
      sampleName: formValue.sampleName || ''
    };
    this.honService.addSample(sample).then(
      () => {
        this.ngOnInit();
      }
    )
  }
}
