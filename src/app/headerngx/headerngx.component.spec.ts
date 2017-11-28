import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderngxComponent } from './headerngx.component';

describe('HeaderngxComponent', () => {
  let component: HeaderngxComponent;
  let fixture: ComponentFixture<HeaderngxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderngxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderngxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
