import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCvComponentComponent } from './detail-cv-component.component';

describe('DetailCvComponentComponent', () => {
  let component: DetailCvComponentComponent;
  let fixture: ComponentFixture<DetailCvComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCvComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
