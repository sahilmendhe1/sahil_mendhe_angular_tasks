import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should say Thought of the Day', () => {
    expect(component.title).toEqual('Thought of the Day');
  })
  it('should display message', () => {
    expect(component.show()).toBeTruthy();
  })

  it('should hide message', () => {
    component.hide();
    expect(component.hide()).toBeFalsy();
  });

  
  it('Message', () => {
    let al= fixture.nativeElement.querySelectorAll('div')
    let value = al[1].innerHTML.trim;
    expect(value).toEqual('Success is achived through accurate efforts'.trim);
  })

});

