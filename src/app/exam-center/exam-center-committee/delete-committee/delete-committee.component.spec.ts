import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCommitteeComponent } from './delete-committee.component';

describe('DeleteCommitteeComponent', () => {
  let component: DeleteCommitteeComponent;
  let fixture: ComponentFixture<DeleteCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
