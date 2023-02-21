import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpassingdatabetweencomponentsComponent } from './loginpassingdatabetweencomponents.component';

describe('LoginpassingdatabetweencomponentsComponent', () => {
  let component: LoginpassingdatabetweencomponentsComponent;
  let fixture: ComponentFixture<LoginpassingdatabetweencomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpassingdatabetweencomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpassingdatabetweencomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
