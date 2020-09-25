import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvItemComponentComponent } from './cv-item-component.component';

describe('CvItemComponentComponent', () => {
  let component: CvItemComponentComponent;
  let fixture: ComponentFixture<CvItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvItemComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
