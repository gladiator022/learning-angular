import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCvcomponentComponent } from './list-cvcomponent.component';

describe('ListCvcomponentComponent', () => {
  let component: ListCvcomponentComponent;
  let fixture: ComponentFixture<ListCvcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCvcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCvcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
