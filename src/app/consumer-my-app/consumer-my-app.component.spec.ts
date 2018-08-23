import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerMyAppComponent } from './consumer-my-app.component';

describe('ConsumerMyAppComponent', () => {
  let component: ConsumerMyAppComponent;
  let fixture: ComponentFixture<ConsumerMyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerMyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerMyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
