import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAccountComponent } from './add-user-account.component';

describe('AddUserAccountComponent', () => {
  let component: AddUserAccountComponent;
  let fixture: ComponentFixture<AddUserAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
