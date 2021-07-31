import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetalsComponent } from './job-detals.component';

describe('JobDetalsComponent', () => {
  let component: JobDetalsComponent;
  let fixture: ComponentFixture<JobDetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDetalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
