import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactivedrivenform',
  templateUrl: './reactivedrivenform.component.html',
  styleUrls: ['./reactivedrivenform.component.css']
})
export class ReactivedrivenformComponent {
loginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});
loginUser(){
  console.log(this.loginForm.value);
}
}
