import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserAccountComponent } from './delete-user-account.component';

describe('DeleteUserAccountComponent', () => {
  let component: DeleteUserAccountComponent;
  let fixture: ComponentFixture<DeleteUserAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
