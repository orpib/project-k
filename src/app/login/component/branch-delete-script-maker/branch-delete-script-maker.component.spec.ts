import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchDeleteScriptMakerComponent } from './branch-delete-script-maker.component';

describe('BranchDeleteScriptMakerComponent', () => {
  let component: BranchDeleteScriptMakerComponent;
  let fixture: ComponentFixture<BranchDeleteScriptMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchDeleteScriptMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchDeleteScriptMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
