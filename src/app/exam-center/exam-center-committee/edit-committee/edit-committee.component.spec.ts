import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommitteeComponent } from './edit-committee.component';

describe('EditCommitteeComponent', () => {
  let component: EditCommitteeComponent;
  let fixture: ComponentFixture<EditCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
