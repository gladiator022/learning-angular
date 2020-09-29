import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployComponentComponent } from './employ-component.component';

describe('EmployComponentComponent', () => {
  let component: EmployComponentComponent;
  let fixture: ComponentFixture<EmployComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
