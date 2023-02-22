import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  title:string;
  message:string;
  value:boolean;

  constructor() {
    this.title = "Thought of the Day";
    this.message="Success is achived through accurate efforts"
    this.value = false;
  }

  ngOnInit() {
    

}

show(){
  this.value = true;
  return this.value;
}
hide(){
  this.value = false;
  return this.value;
}
}
