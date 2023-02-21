import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {
  loginUser (item: any)  {
    
    console.warn(item);    
  }

}
