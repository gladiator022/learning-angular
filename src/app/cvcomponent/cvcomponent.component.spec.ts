import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvcomponentComponent } from './cvcomponent.component';

describe('CvcomponentComponent', () => {
  let component: CvcomponentComponent;
  let fixture: ComponentFixture<CvcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
