import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecrerpasswordComponent } from './secrerpassword.component';

describe('SecrerpasswordComponent', () => {
  let component: SecrerpasswordComponent;
  let fixture: ComponentFixture<SecrerpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecrerpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecrerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
