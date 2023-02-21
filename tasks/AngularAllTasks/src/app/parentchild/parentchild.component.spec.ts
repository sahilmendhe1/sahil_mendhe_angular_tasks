import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchildComponent } from './parentchild.component';

describe('ParentchildComponent', () => {
  let component: ParentchildComponent;
  let fixture: ComponentFixture<ParentchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
