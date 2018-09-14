import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragScrollItemComponent } from './drag-scroll-item.component';

describe('DragScrollItemComponent', () => {
  let component: DragScrollItemComponent;
  let fixture: ComponentFixture<DragScrollItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragScrollItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragScrollItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
