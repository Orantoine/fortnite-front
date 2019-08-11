import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilAuthComponent } from './appareil-auth.component';

describe('AppareilAuthComponent', () => {
  let component: AppareilAuthComponent;
  let fixture: ComponentFixture<AppareilAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareilAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppareilAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
