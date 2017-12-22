import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJeopardyComponent } from './editjeopardy.component';

describe('EditjeopardyComponent', () => {
  let component: EditJeopardyComponent;
  let fixture: ComponentFixture<EditJeopardyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJeopardyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJeopardyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
