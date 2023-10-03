import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonComponent } from './add-button.component';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddButtonComponent]
    });
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have view child references defined', () => {
    fixture.detectChanges();
    expect(component.insertComponent).toBeDefined();
    expect(component.timelineComponent).toBeDefined();
  });
  
  it('should call onSubmit and refreshCardList when submitForm is called', async () => {
    const insertComponentSpy = spyOn(component.insertComponent, 'onSubmit').and.returnValue(Promise.resolve());
    const timelineComponentSpy = spyOn(component.timelineComponent, 'refreshCardList');
  
    await component.submitForm();
  
    expect(insertComponentSpy).toHaveBeenCalled();
    expect(timelineComponentSpy).toHaveBeenCalled();
  });
    
});
