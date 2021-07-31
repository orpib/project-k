import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidteListComponent } from './candidte-list.component';

describe('CandidteListComponent', () => {
  let component: CandidteListComponent;
  let fixture: ComponentFixture<CandidteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
