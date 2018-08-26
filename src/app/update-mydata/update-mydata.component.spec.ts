import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMydataComponent } from './update-mydata.component';

describe('UpdateMydataComponent', () => {
  let component: UpdateMydataComponent;
  let fixture: ComponentFixture<UpdateMydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
