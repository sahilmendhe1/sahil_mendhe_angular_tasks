import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-loginpassingdatabetweencomponents',
  templateUrl: './loginpassingdatabetweencomponents.component.html',
  styleUrls: ['./loginpassingdatabetweencomponents.component.css']
})
export class LoginpassingdatabetweencomponentsComponent {
@Input()
username ="";
@Output()
	 customevent: EventEmitter<number> = new EventEmitter<number>();
	
	  emitevent(){
	    this.customevent.emit(11);    
	  }

}
